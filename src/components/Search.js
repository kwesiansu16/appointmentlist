import React from 'react'
import { FormControl, InputGroup,Dropdown,DropdownButton } from 'react-bootstrap'

const DropDown = ()=>{

  return(
  <>
  <DropdownButton
  variant="info"
  title="Dropdown"
  id="input-group-dropdown-2"
  align="end"
>
  <Dropdown.Item href="#">Today</Dropdown.Item>
  <Dropdown.Item href="#">Another action</Dropdown.Item>
  <Dropdown.Item href="#">Something else here</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#">Separated link</Dropdown.Item>
</DropdownButton>

  </>
  )
}
function Search() {
  return (
    <InputGroup className='mb-3'>
        <FormControl placeholder="Search"/>
            <DropDown/>
    </InputGroup>
  )
}

export default Search
