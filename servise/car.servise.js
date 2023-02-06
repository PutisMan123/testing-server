const jsonfile = require('jsonfile')

const getCarDB = () => {
   let data = jsonfile.readFileSync('./modelcar/cars.json.', (err,obj)=>{
    if (err) {
      console.error(err);
      throw err;
    }
   });
   return data; 
};

const getCarOneDB = (id) => {
   let data = jsonfile.readFileSync('./modelcar/cars.json.', (err,obj)=>{
    if (err) {
      console.error(err);
      throw err;
    }
   });
   if (lid) throw 'нету параметра'
   return data[id];
};

module.export =  {getCarDB,getCarOneDB}; 

