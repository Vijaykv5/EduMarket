import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Auth from "./components/Auth";
import Home from "./components/Home";
import Upload from "./components/Upload";
import Main from './components/Main';
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    const { data } = await supabase.from("countries").select();
    setCountries(data);
  }

 
  return ( 
    <div className='bg-black'>
      {/* <ul>
        {countries.map((country) => (
          <li key={country.name}>{country.name}</li>
        ))}
      </ul> */}


        
      <Routes>
        <Route path='/auth' element={<Home />} />
        <Route path='/' element={<Auth />} />
        <Route path='/upload' element={<Upload />} />
        <Route path='/main' element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
