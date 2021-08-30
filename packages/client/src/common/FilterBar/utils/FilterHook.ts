/*
 * © 2021 Thoughtworks, Inc.
 */

import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { EstimationResult } from '@cloud-carbon-footprint/common'
import { FilterResultResponse } from 'Types'
import { Filters } from './Filters'

export interface UseFiltersResults {
  filteredData: EstimationResult[]
  filters: Filters
  setFilters: Dispatch<SetStateAction<Filters>>
}

const useFilters = (
  data: EstimationResult[],
  buildFilter: (FilterResultResponse) => Filters,
  filteredResponse: FilterResultResponse,
): UseFiltersResults => {
  const [filteredData, setFilteredData] = useState(data)
  const [filters, setFilters] = useState(buildFilter(filteredResponse))

  useEffect(() => {
    setFilteredData(filters.filter(data))
  }, [data, setFilteredData, filters])

  useEffect(() => {
    setFilters(buildFilter(filteredResponse))
  }, [filteredResponse])

  return { filteredData, filters, setFilters }
}

export default useFilters