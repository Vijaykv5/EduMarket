import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Auth from "./components/Auth";
import Home from "./components/Home";
import Upload from "./components/Upload";
import Main from './components/Main';
import { createClient } from '@supabase/supabase-js'
import SignIn from './components/SignIn/Signin';
import SignUp from './components/SignUp/Signup';
import { StorageClient } from '@supabase/storage-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

function App() {
  // const [countries, setCountries] = useState([]);

  // useEffect(() => {
  //   getCountries();
  // }, []);

 
async function fetchData() {
  try {
  
    const bucketName = 'Attachments';
    const filePath = 'CSE GAMMA/Pass1-final.pdf'
    // Fetch data from the 'Attachments' bucket
    const { data, error } = await supabase.storage.from(bucketName).download(filePath)

    
    if (error) {
      console.error('Error fetching data:', error);
      return;
    }
    const blob = new Blob([data], { type: 'application/pdf' });

    // Create a URL for the Blob
    // const url = window.URL.createObjectURL(blob);

    // // Open the PDF in a new tab
    // window.open(url, '_blank');
    
    console.log('Fetched data:', data);
    // Handle the fetched data here
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}

// Call the function to fetch data
fetchData();
    // const { data, error } =  storageClient.from('bucket').upload('/folder/file.txt', fileBody)

   

 
  return ( 
    <div className=''>
      {/* <ul>
        {countries.map((country) => (
          <li key={country.name}>{country.name}</li>
        ))}
      </ul> */}


        
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/upload' element={<Upload />} />
        <Route path='/main' element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
