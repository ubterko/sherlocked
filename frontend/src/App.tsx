import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RadioWidget from '../widgets/RadioWidget';

const mockItem = {
  question: {
    content: "What is the capital of France?",
    widgets: {},
    images: {}
  },
  answerArea: {
    calculator: false,
    financialCalculatorMonthlyPayment: false,
    financialCalculatorTimeToPayOff: false,
    financialCalculatorTotalAmount: false,
    periodicTable: false,
    periodicTableWithKey: false
  }
};

const mockDependencies = {
  analytics: {
    onAnalyticsEvent: () => {}
  },
  useVideo: () => ({ result: { video: null } })
};

function App() {
  return (
    <div>
      <h1>Welcome to Sherlocked!</h1>
      <RadioWidget item={mockItem} dependencies={mockDependencies} />
    </div>
  )
}

export default App
