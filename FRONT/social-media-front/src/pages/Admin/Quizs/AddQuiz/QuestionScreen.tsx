
import {useEffect , useState , useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight , faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { AddQuizContext } from '../../../../store/context/admin.context'
import {addQuiz} from '../../../../api/Quiz.api'

const QuestionsScreen = ():JSX.Element=>{
    const AddQuestionContextConsummer = useContext(AddQuizContext)
    const {stateAddQuestion , dispatchAddQuestion} = AddQuestionContextConsummer
 
        // stat ui 
         const [answersInputs , setAnswerInputs] = useState<JSX.Element |JSX.Element[]>(<div> select number of answers </div>)
         const [indexQuestionPage , setIndexQuestionPage] = useState<number>(1)
         const [numberofAnswers , setnumberOfAnswers] = useState<number>(0)
        
         // stat finish screen 
         
         const [finishScreen , setScreenFinishScreen] = useState<boolean>(true)


        // stat inputs
        const [questionTitle , setQuestionTitle] = useState<string>("")
        const [questionAnswerNumber , setQuestionAnswerNumber] = useState<number>(1)
        const [answerInputsValues , setAnswerInputsValues] = useState<any>({})
            useEffect(()=>{

                const inputsAnswerArray:JSX.Element[] = []
                const SelectOptions:JSX.Element[] = []
                for (let index = 0; index < numberofAnswers; index++) {
                    SelectOptions.push(<option>{index+1}</option>)   
                }
                const seletElement = <select onChange={(event)=>{
                    setQuestionAnswerNumber(Number(event.currentTarget.value))
                }} className='input' name="" >
                    {SelectOptions}
                 </select>

                if(numberofAnswers >0)  inputsAnswerArray.push(seletElement)
                for (let index = 0; index < numberofAnswers; index++) {
                    const inputName = `answer${indexQuestionPage}${index} ` 
                    inputsAnswerArray.push(
                    
                    <input className='input'
                     type="text" 
                     placeholder={`answer number ${index+1}`} 
                     name={inputName} 
                     value={answerInputsValues[inputName] ? answerInputsValues[inputName] : ""}
                     onChange={(event)=>setAnswerInputsValues({
                         ...answerInputsValues ,
                         [inputName] : event.currentTarget.value.trim()
                     })}
                     />
                    
                    )
                        
                    }
                    setAnswerInputs(inputsAnswerArray)
                    
            } , [numberofAnswers , answerInputsValues])
           
           
            const onNextQuestion = ()=>{
                const questionObject = {
                    question : questionTitle ,
                    correctAnswer : questionAnswerNumber ,
                    answers : Object.values(answerInputsValues) as string[]
    
                }
                dispatchAddQuestion({type :"add_question" , value: questionObject} )
                setnumberOfAnswers(0)
                setQuestionTitle("")
                setAnswerInputsValues({})     
                setIndexQuestionPage(indexQuestionPage +1)
            }

            const onPrevQuestion = ()=>{
                 dispatchAddQuestion({type :"delete_question"})
                  setIndexQuestionPage(indexQuestionPage -1)
                 
            }
           
            const FinishScreen = ():JSX.Element=>{
                return (<p className='finish-quiz'  >
                    quiz added thank you </p>)
            }

            const storeQuiz = async (quiz:any)=>{
                console.log("inside store quiz" , quiz);
               let quizObject = {
                title : quiz["title"] , 
                avatar :'' ,
                level : quiz["level"] ,
                questions : quiz["questions"],
                players : quiz['players']
               }

            
                
                
                const formData = new FormData()
               
                formData.append("avatar" , stateAddQuestion.avatar)
                formData.append("body" , JSON.stringify(quizObject))
                
                try {
                    await addQuiz(formData)
                    setScreenFinishScreen(true)
                } catch (error:any) {
                    console.log(error);
                    
                }
                 
            }
                
        return (
           <>
            {!finishScreen ?
            
         <>
              <h1 className='big-title'>{`question ${indexQuestionPage}`}</h1>
            <div className='questions-screen'>
                  
                  <FontAwesomeIcon onClick={onPrevQuestion} style={{display : indexQuestionPage<=1 ? "none":"block"}}  icon={faArrowLeft} />
                   <div className='inputs-answer-container' >
                   <input onChange={(event)=>{
                       setQuestionTitle(event.currentTarget.value)
                   }} className='input' type="text" placeholder='the question ' value={questionTitle} />
                   <input onChange={(event)=>{
                       setnumberOfAnswers(Number(event.currentTarget.value))
                   }} className='input' type="number" placeholder='number of answers' value={numberofAnswers} />
                  
                     
                       {answersInputs}
                      
                   </div>
                    <FontAwesomeIcon onClick={onNextQuestion} style={{display : indexQuestionPage<stateAddQuestion.number_question ? "block" :"none"}}  icon={faArrowRight} />
                
            </div>
            <button onClick={()=>{
                   const questionObject = {
                    question : questionTitle ,
                    correctAnswer : questionAnswerNumber ,
                    answers : Object.values(answerInputsValues) as string[]
    
                }
                dispatchAddQuestion({type :"add_question" , value: questionObject})
                
                
                storeQuiz({
                    ...stateAddQuestion ,
                        questions : [...stateAddQuestion.questions , questionObject]
                })

                
            }} style={{display : indexQuestionPage == stateAddQuestion.number_question? "block":"none"}}>add the quiz</button>
            </> : <FinishScreen />}
           </>
        )
    }

    export default QuestionsScreen