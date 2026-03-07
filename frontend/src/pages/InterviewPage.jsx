import React, { useState } from 'react'
import Step1Stepup from '../components/Step1Stepup';
import Step2Interview from '../components/Step2Interview';
import Step3InterviewReport from '../components/Step3InterviewReport';

const InterviewPage = () => {
  const [step,setStep] = useState(1);
  const [interviewData,setInterviewData] = useState(null);

  return (
    <div className='min-h-screen bg-gray-50 '>
      {step===1 &&(
        <Step1Stepup onStart={(data)=>{setInterviewData(data); setStep(2)}}/>
      )}
      {
        step===2 && (
          <Step2Interview interviewData={interviewData} onFinish={(report)=>{setInterviewData(report);setStep(2)}}/>
        )
      }
      {
        step===3 && (
          <Step3InterviewReport report={interviewData}/>
        )
      }
      
    </div>
  )
}

export default InterviewPage
