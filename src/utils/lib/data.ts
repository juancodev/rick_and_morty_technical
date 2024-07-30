import fs from "fs";
import path from "path";

import { rickMortyAPIUrls } from "app/services/rick_morty/url";

async function fetchDataRickAndMorty() {
  try {
    const response = await fetch(rickMortyAPIUrls.characters.all);
    const data = await response.json();
    const filePath = path.resolve(__dirname, '../data/rick_and_morty.json');
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    console.log('Data fetched and saved successfully.');
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchDataRickAndMorty();