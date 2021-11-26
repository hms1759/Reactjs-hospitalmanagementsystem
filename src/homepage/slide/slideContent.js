import React, { Component, Fragment } from 'react'
import Slider from './slide.json'
import isEmpty from './isEmpty'
import '../../Styles/slide.css'
import '../../Styles/slidery.css'

class SlideHandler extends Component {
    constructor (props){
        super(props);
        this.state= {
        Slider: Slider,
        currentImage:{},
        
        nextImage:{},
        prevImage: {},
        currentImageIndex:0,
        numberofImage:0,
        time:{}
        };
        this.interval=null
    }




    componentDidMount() {
        const {Slider, currentImage,nextImage,prevImage} = this.state;
        this.displayslide(Slider, currentImage,prevImage,nextImage);
        this.startTimer();
    }

    displayslide = (Slider=this.state.Slider,currentImage,nextImage,prevImage )=> {
      let{currentImageIndex }  = this.state;
      if(!isEmpty(this.state.Slider)){Slider =this.state.Slider;
        currentImage= Slider[currentImageIndex];
        nextImage= Slider[currentImageIndex + 1];
        prevImage = Slider[currentImageIndex -1];
        this.setState({
            currentImage,
            nextImage,
            prevImage,
            numberofImage: Slider.length
        });
    };
      
    }

    handleNextButtonClick=()=> {
        if(this.state.nextImage !==undefined){
            this.setState(prevstate =>({
                currentImageIndex: prevstate.currentImageIndex +1
            }),()=>{
                
                this.displayslide(this.state.Slider,this.state.currentImage,this.state.nextImage,this.state.prevImage) }

            );
        }
       else if (this.state.nextImage ===undefined) {
            this.setState(prevstate =>({
                currentImageIndex: prevstate.currentImageIndex= 0
            }),()=>{
                
                this.displayslide(this.state.Slider,this.state.currentImage,this.state.nextImage,this.state.prevImage) }

            );  }


       
        
    } 
    handlePreviousButtonClick=()=> {
        if(this.state.prevImage !==undefined){
            this.setState(prevstate =>({
                currentImageIndex: prevstate.currentImageIndex -1
            }),()=>{
                
                this.displayslide(this.state.Slider, this.state.currentImage,this.state.nextImage,this.state.prevImage) }

            );
        }
        else if (this.state.prevImage ===undefined) {
            this.setState(prevstate =>({
                currentImageIndex: prevstate.currentImageIndex = 2
            }),()=>{
                
                this.displayslide(this.state.Slider,this.state.currentImage,this.state.nextImage,this.state.prevImage) }

            );  }
       
    } 
  
    onClickButtonHandler=(e) =>{
        switch(e.target.id){
            case 'next':
                this.handleNextButtonClick();
                break;
            case 'previous':
                this.handlePreviousButtonClick();
                break;
                
                default:
                    break;
        }

    }

   startTimer =() => {
        const countDowntime = Date.now() + 4000;
        this.interval = setInterval (() =>{
            const now = new Date();
            const distance = countDowntime- now;
           if(distance <0){
                clearInterval(this.interval);
                this.setState({
                    time:{
                        minutes:0,
                        seconds: 0
                    }
                }, ()=> {
                    this.handleNextButtonClick();
                    this.startTimer();
                });
            }
        },1000);
    }
    render () {
         const {currentImage,time} = this.state;
      
        return(
            <Fragment>
                
	<div id="slides" class="cover-slides">
          <br/>  
            <div class="slides-container">
                          
                <div class="text-center">
                        <img className='slideimage' src={currentImage.Urls} alt='slider' />
                        </div> 
                    
                        <div class="container textimg">
                            <div class="row">
                                <div class="col-md-12 texttimg">
                                        
                                        <h1 className="m-b-20"><strong>{currentImage.title}</strong></h1>
                                        <p className="m-b-40">{currentImage.description}</p>
                                        <p><a class="btn btn-lg btn-circle btn-outline-new-white" href="#">Reservation</a></p>
						 
                                     </div>
                                 </div>
                            </div>
                         <div>
                 </div>
            </div>
     </div>

            </Fragment>
            
        )

    }
} 
export default SlideHandler