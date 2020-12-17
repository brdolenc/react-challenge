import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { format } from "date-fns";
import {
  Grid,
  MenuItem,
  Button,
  Switch,
  FormControlLabel,
} from "@material-ui/core";

import { changeFilter } from '../../../store/actions/filter';
import Filter from '../../../services/filter';

import * as S from './styles';

const Filters = () => {
  const [ showFilters, setShowFilters ] = useState(false);
  const [ enableFilters, setEnableFilters ] = useState(false);
  const [ buildedFilters, setBuildedFilters ] = useState([]);
  const [ fieldsFilters, setFieldsFilters ] = useState([]);
  const [ textFilter, setTextFilter ] = useState(null);

  const dispatch = useDispatch();

  const filterValues = useSelector((state) => state.Filter);

  useEffect( async () => {
    const dataFilters = await Filter.get();

    if (dataFilters.status === 200) {
      setBuildedFilters(buildFilters(dataFilters?.data?.filters));
      setShowFilters(true);
    }
  }, []);

  const inputSelect = (id, name, onChangeFields, options = [], validation = {}) => {
    return (
      <S.TextFieldCustom 
        id={id} 
        label={name} 
        fullWidth 
        select 
        variant="outlined" 
        size="small"
        value=""
        onChange={(e) => onChangeFields(e.target.value)}
      >
        {options.map((option, key) => <MenuItem key={key} value={option.value}>{option.name}</MenuItem>)}
      </S.TextFieldCustom>
    )
  }

  const inputDate = (id, name, onChangeFields, options = [], validation = {}) => {
    return (
      <S.TextFieldCustom 
        id={id} 
        label={name} 
        fullWidth 
        type="datetime-local" 
        variant="outlined" 
        size="small" 
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(e) => onChangeFields(format(new Date(e.target.value), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"))}
      />
    )
  }

  const inputNumber = (id, name, onChangeFields, options = [], validation = {}) => {
    return (
      <S.TextFieldCustom 
        id={id} 
        label={name} 
        type="number" 
        variant="outlined" 
        size="small" 
        fullWidth
        InputProps={{
          inputProps: {
            min: validation?.min,
            max: validation?.max,
          },
        }}
        onChange={(e) => onChangeFields(e.target.value)}
        helperText={validation?.min && validation?.max && `Valor mínimo ${validation?.min} e valor máximo ${validation?.max}`}
      />
    );
  }

  const buildFilters = (filters) => { 
    return filters.map((filter) => {
      if (filter.values && filter?.values?.length > 0) {
        filter.input = inputSelect;
      } else if (filter?.validation?.primitiveType === 'STRING' && filter?.validation?.entityType === 'DATE_TIME') {
        filter.input = inputDate;
      } else if (filter?.validation?.primitiveType === 'INTEGER') {
        filter.input = inputNumber;
      }
      return filter;
    });
  };

  const onChangeFields = (id, value) => {
    setFieldsFilters({
      ...fieldsFilters,
      [id]: value,
    })
  }

  const handleFilter = () => {
    const filter = {
      text: textFilter,
      advancedFilter: fieldsFilters,
      hasFilter: true
    }
    
    dispatch(changeFilter(filter))
  }

  const filterText = (value) => {
    const filter = {
      text: value,
      advancedFilter: {},
      hasFilter: false
    }

    setTextFilter(value);
    dispatch(changeFilter(filter))
  }

  return (
    <S.BoxFilter>
      <S.TextFieldCustom
        id="search"
        label="Buscar playlist"
        variant="outlined"
        value={filterValues.text ? filterValues.text : ''}
        size="small"
        onChange={(e) => filterText(e.target.value)}
        fullWidth
      />
      {showFilters && buildedFilters.length > 0 &&
        <>
          <FormControlLabel
            control={<Switch checked={enableFilters} onChange={() => setEnableFilters(enableFilters ? false : true)} name="jason" />}
            label="Filtros"
          />
          {enableFilters &&
            <Grid container spacing={1}>
              {buildedFilters.map((filter, key) => {
                  return (
                    <Grid key={key} item lg={4} md={4} xs={12} key={filter.name}>
                      {filter.input(filter.id, filter.name, (e) => onChangeFields(filter.id, e), filter?.values, filter?.validation)}
                    </Grid>
                  )
                })
              }
                <Grid item lg={4} md={4} xs={12}>
                  <Button variant="contained" color="primary" size="large" href="#contained-buttons" fullWidth onClick={handleFilter}>
                    Filtrar
                  </Button>
                </Grid>
            </Grid>
          }
        </>
      }

    </S.BoxFilter>
  );
};

export default Filters;