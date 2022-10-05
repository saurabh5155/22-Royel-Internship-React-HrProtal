import React, { useEffect } from 'react'
import { ListUser } from '../../Table/User/ListUser'
import { UpdateUser } from '../../Table/User/UpdateUser'
// import { User } from '../../Table/User/User'
import {AddRole} from '../../Table/Role/AddRole'
import {ListRole} from '../../Table/Role/ListRole'
import { UpdateRole } from '../../Table/Role/UpdateRole'
import { AddAddress } from '../../Table/Address/AddAddress'
import { ListAddress } from '../../Table/Address/ListAddress'
import { UpdateAddress } from '../../Table/Address/UpdateAddress'
import { AddUserDetail } from '../../Table/UserDetail/AddUserDetail'
import { ListUserDetail } from '../../Table/UserDetail/ListUserDetail'
import { UpdateUserDetail } from '../../Table/UserDetail/UpdateUserDetail'
import { AddFamilyRelation } from '../../Table/FamilyRelation/AddFamilyRelation'
import { ListFamilyRelation } from '../../Table/FamilyRelation/ListFamilyRelation'
import { UpdateFamilyRelation } from '../../Table/FamilyRelation/UpdateFamilyRelation'
import { AddFamilyDetail } from '../../Table/FamilyDetail/AddFamilyDetail'
import { ListFamilyDetail } from '../../Table/FamilyDetail/ListFamilyDetail'
import { UpdateFamilyDetail } from '../../Table/FamilyDetail/UpdateFamilyDetail'
import { AddVacation } from '../../Table/Vacation/AddVacation'
import { ListVacation } from '../../Table/Vacation/ListVacation'
import { UpdateVacation } from '../../Table/Vacation/UpdateVacation'
import { AddSalary } from '../../Table/Salary/AddSalary'
import { ListSalary } from '../../Table/Salary/ListSalary'
import { UpdateSalary } from '../../Table/Salary/UpdateSalary'
import { AddLeave } from '../../Table/Leave/AddLeave'
import { ListLeave } from '../../Table/Leave/ListLeave'
import { UpdateLeave } from '../../Table/Leave/UpdateLeave'
import { AddCelebration } from '../../Table/Celebration/AddCelebration'
import { ListCelebration } from '../../Table/Celebration/ListCelebration'
import { UpdateCelebration } from '../../Table/Celebration/UpdateCelebration'
import { Route, Routes } from 'react-router-dom'

import { Profile } from '../Profile'
import { HrHeader } from './HrHeader'
import { HrSidebar } from './HrSidebar'

export const HrDeshbord = () => {
  return (
    <div>
      <HrHeader/>
      <HrSidebar/>
      <Routes>

      <Route path='/profile' element={<Profile/>}></Route>
        
        
      <Route path="roles" element={<AddRole/>}></Route>
      <Route path='listRole' element={<ListRole/>}></Route>
      <Route path='updateRole/:id' element={<UpdateRole/>}></Route>

      <Route path='listuser' element={<ListUser/>}></Route>
      <Route path='updateUser/:id' element={<UpdateUser/>}></Route>


      
      <Route path='addUserDetail' element={<AddUserDetail/>}></Route>
      <Route path='listUserDetail' element={<ListUserDetail/>}></Route>
      <Route path='listUserDetail/updateUserDetail/:id' element={<UpdateUserDetail/>}></Route>


      <Route path='addAddress' element={<AddAddress/>}></Route>
      <Route path='listUserAddress' element={<ListAddress/>}></Route>
      <Route path='listUserAddress/updateUserAddress/:id' element={<UpdateAddress/>}></Route>


      <Route path='addFamilyRelation' element={<AddFamilyRelation/>}></Route>
      <Route path='listFamilyRelation' element={<ListFamilyRelation/>}></Route>
      <Route path='listFamilyRelation/updateFamilyRelation/:id' element={<UpdateFamilyRelation/>}></Route>


      <Route path='addFamilyDetail' element={<AddFamilyDetail/>}></Route>
      <Route path='listFamilyDetail' element={<ListFamilyDetail/>}></Route>
      <Route path='listFamilyDetail/updateFamilyDetail/:id' element={<UpdateFamilyDetail/>}></Route>


      <Route path='addCelebration' element={<AddCelebration/>}></Route>
      <Route path='listCelebration' element={<ListCelebration/>}></Route>
      <Route path='listCelebration/updateCelebration/:id' element={<UpdateCelebration/>}></Route>


      <Route path='addVacation' element={<AddVacation/>}></Route>
      <Route path='listVacation' element={<ListVacation/>}></Route>
      <Route path='listVacation/updateVacation/:id' element={<UpdateVacation/>}></Route>


      <Route path='addSalary' element={<AddSalary/>}></Route>
      <Route path='listSalary' element={<ListSalary/>}></Route>
      <Route path='listSalary/updateSalary/:id' element={<UpdateSalary/>}></Route>


      <Route path='addLeave' element={<AddLeave/>}></Route>
      <Route path='listLeave' element={<ListLeave/>}></Route>
      <Route path='listLeave/updateLeave/:id' element={<UpdateLeave/>}></Route> 
      </Routes>
    </div>
  )
}
