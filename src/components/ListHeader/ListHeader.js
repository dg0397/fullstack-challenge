import React from 'react'
import { ListHeader } from './styles'

const ListHeaderComponent = ({ type, id, count }) => {
  return (
    <ListHeader type={type}>
      <p>{`${type} Type ${id}`}</p>
      <p>{`Count ${count}`}</p>
    </ListHeader>
  )
}

export default ListHeaderComponent
