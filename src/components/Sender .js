import React, { createContext, useState } from 'react';
import Receiver from './Receiver';

// Créer le contexte

// Fonction pour récupérer l'ID depuis l'API en utilisant fetch

  const fetchIDFromAPI = async () => {
    try {
        const response = await fetch("http://127.0.0.1:5000/api/auth/getOne/34");
        const data = await response.json();
        const id = data.user.id; // Supposons que l'ID est disponible dans la propriété "id" de la réponse
      return id;
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  
  export default fetchIDFromAPI;




  

