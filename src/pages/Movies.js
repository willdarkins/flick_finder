import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const movieResponse = async() => {
  const { data } = await axios.get()
}

function Movies() {
  return(
  <>
  <span className='pageTitle'>Movies</span>
  </>
  )
}

export default Movies;
