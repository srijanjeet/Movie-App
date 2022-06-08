import React from 'react'
import { BrowseContainer } from '../containers/browseContainer';
import useContent from '../hooks/use-content'
import selectionFilter from '../utils/selection-map';

export default function Browse() {

    const {series} = useContent("series")
    const {films} = useContent("films")
    // console.log(series);
  const slides = selectionFilter({series, films})
  console.log(slides);
  return (
    <BrowseContainer slides={slides}/>
  )
}
