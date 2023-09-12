import './App.css';
import React, { useState } from 'react';
import {Button, Form, Input, Radio, Modal, Space} from 'antd';
import FormItem from 'antd/es/form/FormItem';
import axios from 'axios';

function App() {

  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);


  const [age,setAge] = useState(1);
  const [sex,setSex] = useState('M');
  const [on_thyroxine,setOn_thyroxine] = useState('f');
  const [query_on_thyroxine,setQuery_on_thyroxine] = useState('f');
  const [on_antithyroid_medication,setOn_antithyroid_medication] = useState('f');
  const [thyroid_surgery,setThyroid_surgery] = useState('f');
  const [query_hyperthyroid,setQuery_hyperthyroid] = useState('f');
  const [query_hypothyroid,setQuery_hypothyroid] = useState('f');
  const [pregnant,setPregnant] = useState('f');
  const [sick,setSick] = useState('f');
  const [tumor,setTumor] = useState('f');
  const [lithium,setLithium] = useState('f');
  const [goitre,setGoitre] = useState('f');
  const [TSH_measured,setTSH_measured] = useState('n');
  const [TSH_levels,setTSH_levels] = useState(0);
  const [T3_measured,setT3_measured] = useState('n');
  const [T3_levels,setT3_levels] = useState(0);
  const [TT4_measured,setTT4_measured] = useState('n');
  const [TT4_levels,setTT4_levels] = useState(0);
  const [T4U_measured,setT4U_measured] = useState('n');
  const [T4U_levels,setT4U_levels] = useState(0);
  const [FTI_measured,setFTI_measured] = useState('n');
  const [FTI_levels,setFTI_levels] = useState(0);
  const [TBG_measured,setTBG_measured] = useState('n');
  const [TBG_levels,setTBG_levels] = useState(0);
  const [finalResult,setFinalResult]=useState('negative');


  const ageChangeHandler = (event:any) =>{
    setAge(event.target.value);
  }
  const sexChangeHandler = (event:any) =>{
    setSex(event.target.value);

  }

  const on_thyroxineChangeHandler = (event:any) =>{
    setOn_thyroxine(event.target.value);
  }

  const query_on_thyroxineChangeHandler = (event:any) =>{
    setQuery_on_thyroxine(event.target.value);
  }

  const on_antithyroid_medicationChangeHandler = (event:any) =>{
    setOn_antithyroid_medication(event.target.value);
  }

  const thyroid_surgeryChangeHandler = (event:any) =>{
    setThyroid_surgery(event.target.value);
  }

  const query_hyperthyroidChangeHandler = (event:any) =>{
    setQuery_hyperthyroid(event.target.value);
  }

  const query_hypothyroidChangeHandler = (event:any) =>{
    setQuery_hypothyroid(event.target.value);
  }

  const pregnantChangeHandler = (event:any) =>{
    setPregnant(event.target.value);
  }

  const sickChangeHandler = (event:any) =>{
    setSick(event.target.value);
  }

  const tumorChangeHandler = (event:any) =>{
    setTumor(event.target.value);
  }

  const lithiumChangeHandler = (event:any) =>{
    setLithium(event.target.value);
  }

  const goitreChangeHandler = (event:any) =>{
    setGoitre(event.target.value);
  }

  const TSH_measuredChangeHandler = (event:any) =>{
    setTSH_measured(event.target.value);
  }

  const TSH_levelsChangeHandler = (event:any) =>{
    setTSH_levels(event.target.value);
  }

  const T3_measuredChangeHandler = (event:any) =>{
    setT3_measured(event.target.value);
  }

  const T3_levelsChangeHandler = (event:any) =>{
    setT3_levels(event.target.value);
  }

  const TT4_measuredChangeHandler = (event:any) =>{
    setTT4_measured(event.target.value);
  }

  const TT4_levelsChangeHandler = (event:any) =>{
    setTT4_levels(event.target.value);
  }

  const T4U_measuredChangeHandler = (event:any) =>{
    setT4U_measured(event.target.value);
  }

  const T4U_levelsChangeHandler = (event:any) =>{
    setT4U_levels(event.target.value);
  }

  const FTI_measuredChangeHandler = (event:any) =>{
    setFTI_measured(event.target.value);
  }

  const FTI_levelsChangeHandler = (event:any) =>{
    setFTI_levels(event.target.value);
  }

  const TBG_measuredChangeHandler = (event:any) =>{
    setTBG_measured(event.target.value);
  }

  const TBG_levelsChangeHandler = (event:any) =>{
    setTBG_levels(event.target.value);
  }

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };



 const apiURL ="https://ussouthcentral.services.azureml.net/workspaces/3c792b33e9a54325b230d2e531bc764c/services/19b3cbc59d9744109a632b48efe7f003/execute?api-version=2.0&format=swagger";
          const apiKey = "jWsukhBhxOUUhyEcJNwUPRgmsbmzQ3FTscN46ZpCi4BadKpuCcRMi7koBn3c0Vhiv4s2m9ZNJ7N4+AMC8iZFJA==";
          const proxyUrl = "https://cors-anywhere.herokuapp.com/";
          const httpOptions={
            headers:{
              'Authorization': `Bearer ${apiKey}`, 
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',        
            }
          }
  const invokeRequestResponseService = async (props:any) => {

    console.log(props);
    

   
      const scoreRequest={
        "Inputs":{
           "input1":[
            {         
                  "condition":props.condition,
                  "age": props.age,
                  "sex": props.sex,
                  "on thyroxine": props.on_thyroxine,
                  "query on thyroxine": props.query_on_thyroxine,
                  "on antithyroid medication": props.on_antithyroid_medication,
                  "thyroid surgery": props.thyroid_surgery,
                  "query hypothyroid": props.query_hypothyroid,
                  "query hyperthyroid": props.query_hyperthyroid,             
                  "pregnant": props.pregnant,
                  "sick": props.sick,
                  "tumor": props.tumor,              
                  "lithium": props.lithium,
                  "goitre": props.goitre,                          
                  "TSH measured": props.TSH_measured,
                  "TSH": props.TSH_levels,
                  "T3 measured": props.T3_measured,
                  "T3": props.T3_levels,
                  "TT4 measured": props.TT4_measured,
                  "TT4": props.TT4_levels,
                  "T4U measured": props.T4U_measured,
                  "T4U": props.T4U_levels,
                  "FTI measured": props.FTI_measured,
                  "FTI": props.FTI_levels,
                  "TBG measured": props.TBG_measured,
                  "TBG": props.TBG_levels,      
            }
           ]    
        },"GlobalParameters": {}
      };

      try {
      const response = await axios.post(proxyUrl+apiURL, scoreRequest, httpOptions);

      if (response.status === 200) {
        const result = response.data;
        
        if(result.Results.output1[0]['Scored Labels']==='sick-euthyroid'){
          setFinalResult("Prepoznata bolest štitnjače");
        }
        else{
          setFinalResult("Nije prepoznata bolest štitnjače");
        }
      } else {
        console.error(`The request failed with status code: ${response.status}`);
       
      }
    } catch (error) {
      console.error('An error occurred:', error);

    }  

    showModal();
  };

  const handleSubmit= async(event:any)=> {
    
    event.preventDefault();
    const data={
      condition: "",
      age: age,
      sex: sex,
      on_thyroxine: on_thyroxine,
      query_on_thyroxine: query_on_thyroxine,
      on_antithyroid_medication: on_antithyroid_medication,
      thyroid_surgery: thyroid_surgery,
      query_hyperthyroid: query_hyperthyroid,
      query_hypothyroid: query_hypothyroid,
      pregnant: pregnant,
      sick:sick,
      tumor:tumor ,
      lithium:lithium,
      goitre:goitre,
      TSH_measured:TSH_measured,
      TSH_levels:TSH_levels,
      T3_measured:T3_measured,
      T3_levels:T3_levels,
      TT4_measured:TT4_measured,
      TT4_levels:TT4_levels,
      T4U_measured:T4U_measured,
      T4U_levels:T4U_levels,
      FTI_measured:FTI_measured,
      FTI_levels:FTI_levels,
      TBG_measured:TBG_measured,
      TBG_levels:TBG_levels,
    };

    invokeRequestResponseService(data);
   
};

  const TSH_watcher = Form.useWatch('TSH_measured', form);
  const T3_watcher = Form.useWatch('T3_measured', form);
  const TT4_watcher = Form.useWatch('TT4_measured', form);
  const T4U_watcher = Form.useWatch('T4U_measured', form);
  const FTI_watcher = Form.useWatch('FTI_measured', form);
  const TBG_watcher = Form.useWatch('TBG_measured', form);


  return (
    <React.Fragment>
      <header>
        <h1>Obrazac za pomoć pri prepoznavanju bolesti štitnjače</h1>
      </header>
      <body>
        <div className='card'>
      <Form form={form} onFinish={handleSubmit}>
        <div className='radio_container'>
        <div className='column'>
        <div className='left_buttons'>
        <FormItem >
          <label>
            Godine: 
            <Space.Compact>
              <Input type='number' name='age' min={1} max={110} value={age} onChange={ageChangeHandler}/>
            </Space.Compact>
          </label>
        </FormItem>

        <FormItem>
          <Radio.Group onChange={sexChangeHandler}>
          <label>
            Spol:
          </label>
            <Radio value={"M"}>Muško</Radio>
            <Radio value={'F'}>Žensko</Radio>
          </Radio.Group>
        </FormItem>

        
        <FormItem >
          <Radio.Group onChange={on_thyroxineChangeHandler}>
            <label>
              Koristi tiroksin:
            </label>
            <Radio value={'t'}>Da</Radio>
            <Radio value={'f'}>Ne</Radio>
          </Radio.Group>
        </FormItem>

        <FormItem >
          <Radio.Group onChange={query_on_thyroxineChangeHandler}>
            <label>
              Preporuka za tiroksin: 
            </label>
            <Radio value={'t'}>Da</Radio>
            <Radio value={'f'}>Ne</Radio>
          </Radio.Group>
        </FormItem>

        <FormItem >
          <Radio.Group onChange={on_antithyroid_medicationChangeHandler}>
            <label>
              Na antitiroidnim lijekovima:
            </label>
            <Radio value={'t'}>Da</Radio>
            <Radio value={'f'}>Ne</Radio>
          </Radio.Group>
        </FormItem>

        <FormItem>
          <Radio.Group onChange={thyroid_surgeryChangeHandler}>
            <label>
              Operacija štitnjače: 
            </label>
            <Radio value={'t'}>Da</Radio>
            <Radio value={'f'}>Ne</Radio>
          </Radio.Group>
        </FormItem>

        <FormItem>
          <Radio.Group onChange={query_hyperthyroidChangeHandler}>
            <label>
              Hipertireoza: 
            </label>
            <Radio value={'t'}>Da</Radio>
            <Radio value={'f'}>Ne</Radio>
          </Radio.Group>
        </FormItem>

        <FormItem>
          <Radio.Group onChange={query_hypothyroidChangeHandler}>
            <label>
              Hipotireoza: 
            </label>
            <Radio value={'t'}>Da</Radio>
            <Radio value={'f'}>Ne</Radio>
          </Radio.Group>
        </FormItem>

        <FormItem>
          <Radio.Group onChange={pregnantChangeHandler}>
            <label>
              Trudna: 
            </label>
            <Radio value={'t'}>Da</Radio>
            <Radio value={'f'}>Ne</Radio>
          </Radio.Group>
        </FormItem>
        
        <FormItem>
          <Radio.Group onChange={sickChangeHandler}>
            <label>
              Bolest: 
            </label>
            <Radio value={'t'}>Da</Radio>
            <Radio value={'f'}>Ne</Radio>
          </Radio.Group>
        </FormItem>

        <FormItem>
          <Radio.Group onChange={tumorChangeHandler}>
            <label>
              Tumor: 
            </label>
            <Radio value={'t'}>Da</Radio>
            <Radio value={'f'}>Ne</Radio>
          </Radio.Group>
        </FormItem>
       
        <FormItem>
          <Radio.Group onChange={lithiumChangeHandler}>
            <label>
              Litij: 
            </label>
            <Radio value={'t'}>Da</Radio>
            <Radio value={'f'}>Ne</Radio>
          </Radio.Group>
        </FormItem>

        <FormItem>
          <Radio.Group onChange={goitreChangeHandler}>
            <label>
              Gušavost: 
            </label>
            <Radio value={'t'}>Da</Radio>
            <Radio value={'f'}>Ne</Radio>
          </Radio.Group>
        </FormItem>
        </div>
        </div>

        <div className='column'>
        <div className='measuring_buttons'>
        <FormItem name={"TSH_measured"}>
          <Radio.Group onChange={TSH_measuredChangeHandler}>
            <label>
              TSH izmjeren?
            </label>
            <Radio value={'y'}>Da</Radio>
            <Radio value={'n'}>Ne</Radio>
          </Radio.Group>
        </FormItem>

        {TSH_watcher==='y' && 
        <FormItem name={"TSH_levels"}>
            <label>
              Razina TSH: <Input type='number' min={0} max={540} step={0.1} value={TSH_levels} onChange={TSH_levelsChangeHandler}/>
            </label>
        </FormItem>}

        <FormItem name={"T3_measured"}>
          <Radio.Group onChange={T3_measuredChangeHandler}>
            <label>
              T3 izmjeren?
            </label>
            <Radio value={'y'}>Da</Radio>
            <Radio value={'n'}>Ne</Radio>
          </Radio.Group>
        </FormItem>

        {T3_watcher==='y' && 
        <FormItem name={"T3_levels"}>
            <label>
              Razina T3: <Input type='number' min={0} max={12} step={0.1} value={T3_levels} onChange={T3_levelsChangeHandler}/>
            </label>
        </FormItem>}

        <FormItem name={"TT4_measured"}>
          <Radio.Group onChange={TT4_measuredChangeHandler}>
            <label>
              TT4 izmjeren?
            </label>
            <Radio value={'y'}>Da</Radio>
            <Radio value={'n'}>Ne</Radio>
          </Radio.Group>
        </FormItem>

        {TT4_watcher==='y' && 
        <FormItem name={"TT4_levels"}>
            <label>
              Razina TT4: <Input type='number' min={0} max={500} value={TT4_levels} onChange={TT4_levelsChangeHandler}/>
            </label>
        </FormItem>}

        <FormItem name={"T4U_measured"}>
          <Radio.Group onChange={T4U_measuredChangeHandler}>
            <label>
              T4U izmjeren?
            </label>
            <Radio value={'y'}>Da</Radio>
            <Radio value={'n'}>Ne</Radio>
          </Radio.Group>
        </FormItem>

        {T4U_watcher==='y' && 
        <FormItem name={"T4U_levels"}>
            <label>
              Razina T4U: <Input type='number' min={0} max={3.0} step={0.1} value={T4U_levels} onChange={T4U_levelsChangeHandler}/>
            </label>
        </FormItem>}

        <FormItem name={"FTI_measured"}>
          <Radio.Group onChange={FTI_measuredChangeHandler}>
            <label>
              FTI izmjeren?
            </label>
            <Radio value={'y'}>Da</Radio>
            <Radio value={'n'}>Ne</Radio>
          </Radio.Group>
        </FormItem>

        {FTI_watcher==='y' && 
        <FormItem name={"FTI_levels"}>
            <label>
              Razina FTI: <Input type='number' min={0} max={890} step={1} value={FTI_levels} onChange={FTI_levelsChangeHandler}/>
            </label>
        </FormItem>}

        <FormItem name={"TBG_measured"}>
          <Radio.Group onChange={TBG_measuredChangeHandler}>
            <label>
              TBG izmjeren?
            </label>
            <Radio value={'y'}>Da</Radio>
            <Radio value={'n'}>Ne</Radio>
          </Radio.Group>
        </FormItem>

        {TBG_watcher==='y' && 
        <FormItem name={"TBG_levels"}>
            <label>
              Razina TBG: <Input type='number' min={0} max={130} step={1} value={TBG_levels} onChange={TBG_levelsChangeHandler}/>
            </label>
        </FormItem>}
        </div></div></div>
        <div className='submitButton'>
        <Button name='submit' onClick={handleSubmit}> Podnesi</Button>
        </div>
      </Form>
      <Modal title='Rezultati pretrage' cancelButtonProps={{style:{display:'none'}}} open={isModalOpen} onOk={handleOk} onCancel={handleOk}>
        {finalResult}
      </Modal>
      </div>
      </body>
    </React.Fragment>
    
  );
}
export default App;
