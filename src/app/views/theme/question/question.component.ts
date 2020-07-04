import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ExamConfigService } from '../../../_services/exam-config.service';
import { AuthenticationService } from '../../../_services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../../../_services/alert.service';
import { first, takeWhile } from 'rxjs/operators';
import { ExamQuestion } from '../../../_models/exam_question';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import {
  SpeechRecognitionLang,
  SpeechRecognitionMaxAlternatives,
  SpeechRecognitionGrammars,
  SpeechRecognitionService,
  resultList,
} from '@kamiazya/ngx-speech-recognition';
import { Subscription, Subject } from 'rxjs';

declare const annyang: any;
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  providers: [   {
    provide: SpeechRecognitionLang,
    useValue: 'en-US',
  },
  {
    provide: SpeechRecognitionMaxAlternatives,
    useValue: 1,
  },
  SpeechRecognitionService
  ]
})
export class QuestionComponent implements OnInit {

  exam_question: ExamQuestion = new ExamQuestion();
  private submitted = false;
  isCreate = false;
  total_question = 4;
  questionForm: FormGroup;
  voice_language ='hi-IN';
  public started = false;
  initialText =  "";
  sequence = 0;
  voice_supported = false;
  langs = 
[['Afrikaans',       ['af-ZA']],
 ['Bahasa Indonesia',['id-ID']],
 ['Bahasa Melayu',   ['ms-MY']],
 ['Català',          ['ca-ES']],
 ['Čeština',         ['cs-CZ']],
 ['Deutsch',         ['de-DE']],
 ['English',         ['en-AU', 'Australia'],
                     ['en-CA', 'Canada'],
                     ['en-IN', 'India'],
                     ['en-NZ', 'New Zealand'],
                     ['en-ZA', 'South Africa'],
                     ['en-GB', 'United Kingdom'],
                     ['en-US', 'United States']],
 ['Español',         ['es-AR', 'Argentina'],
                     ['es-BO', 'Bolivia'],
                     ['es-CL', 'Chile'],
                     ['es-CO', 'Colombia'],
                     ['es-CR', 'Costa Rica'],
                     ['es-EC', 'Ecuador'],
                     ['es-SV', 'El Salvador'],
                     ['es-ES', 'España'],
                     ['es-US', 'Estados Unidos'],
                     ['es-GT', 'Guatemala'],
                     ['es-HN', 'Honduras'],
                     ['es-MX', 'México'],
                     ['es-NI', 'Nicaragua'],
                     ['es-PA', 'Panamá'],
                     ['es-PY', 'Paraguay'],
                     ['es-PE', 'Perú'],
                     ['es-PR', 'Puerto Rico'],
                     ['es-DO', 'República Dominicana'],
                     ['es-UY', 'Uruguay'],
                     ['es-VE', 'Venezuela']],
 ['Euskara',         ['eu-ES']],
 ['Français',        ['fr-FR']],
 ['Galego',          ['gl-ES']],
 ['Hrvatski',        ['hr_HR']],
 ['IsiZulu',         ['zu-ZA']],
 ['Íslenska',        ['is-IS']],
 ['Italiano',        ['it-IT', 'Italia'],
                     ['it-CH', 'Svizzera']],
 ['Magyar',          ['hu-HU']],
 ['Nederlands',      ['nl-NL']],
 ['Norsk bokmål',    ['nb-NO']],
 ['Polski',          ['pl-PL']],
 ['Português',       ['pt-BR', 'Brasil'],
                     ['pt-PT', 'Portugal']],
 ['Română',          ['ro-RO']],
 ['Slovenčina',      ['sk-SK']],
 ['Suomi',           ['fi-FI']],
 ['Svenska',         ['sv-SE']],
 ['Türkçe',          ['tr-TR']],
 ['български',       ['bg-BG']],
 ['Pусский',         ['ru-RU']],
 ['Српски',          ['sr-RS']],
 ['한국어',            ['ko-KR']],
 ['中文',             ['cmn-Hans-CN', '普通话 (中国大陆)'],
                     ['cmn-Hans-HK', '普通话 (香港)'],
                     ['cmn-Hant-TW', '中文 (台灣)'],
                     ['yue-Hant-HK', '粵語 (香港)']],
 ['日本語',           ['ja-JP']],
 ['Lingua latīna',   ['la']]];

  editorConfig: AngularEditorConfig = {
    editable: true,
      spellcheck: true,
      height: 'auto',
      minHeight: '10',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Enter text here...',
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',
      fonts: [
        {class: 'arial', name: 'Arial'},
        {class: 'times-new-roman', name: 'Times New Roman'},
        {class: 'calibri', name: 'Calibri'},
        {class: 'comic-sans-ms', name: 'Comic Sans MS'}
      ],
      customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
//    uploadUrl: 'v1/image',
//    uploadUrl: 'http://127.0.0.1:5000/upload-image', 
//    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      ['fontSize']
    ]
};

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private examConfigService: ExamConfigService,
    private spinner: NgxSpinnerService,
    private service: SpeechRecognitionService,
    public translate: TranslateService,
    private alertService: AlertService
  ) {
    debugger
      if(this.getBrowserName() == "chrome"){
        this.voice_supported = true;
      }
      this.route.paramMap.subscribe(params => {
        this.spinner.show();
        if(params.get('exam_config_id'))
          this.exam_question.exam_config_id = Number(params.get('exam_config_id'));
        if(params.get('id')){
          this.exam_question.id = Number(params.get('id'));  
          if(this.exam_question.id == 0){
            this.isCreate = true;
            this.exam_question.question_type = 1;
            this.exam_question.question = "";
            this.exam_question.choice1 = "";
            this.exam_question.choice2 = "";
            this.exam_question.choice3 = "";
            this.exam_question.choice4 = "";
            this.exam_question.choice5 = "";
            this.spinner.hide();
          }else{
            this.examConfigService.get_exam_question(this.exam_question.id)
            .pipe()
            .subscribe(
                (data: ExamQuestion) => {
                  this.exam_question =  data;  
                  this.updateTotalQuestion();
                  this.spinner.hide();
                },
                error => {
                    this.alertService.error(error);
                    this.spinner.hide();
                });
          }
        }else{
          this.spinner.hide();
        }       
      });
      if(this.voice_supported){
        this.service.onstart = (e) => {
          console.log('onstart');
        };
        this.service.onresult = (e) => {
          this.listen_loop(e)
        };
        this.service.onend = (e) => {
          console.log('onend');
          this.started = false;
        };
        this.service.onerror = (e) => {
          console.log('onerror');
          this.started = false;
        };
      }
  }
  public getBrowserName() {
    const agent = window.navigator.userAgent.toLowerCase()
    switch (true) {
      case agent.indexOf('edge') > -1:
        return 'edge';
      case agent.indexOf('opr') > -1 && !!(<any>window).opr:
        return 'opera';
      case agent.indexOf('chrome') > -1 && !!(<any>window).chrome:
        return 'chrome';
      case agent.indexOf('trident') > -1:
        return 'ie';
      case agent.indexOf('firefox') > -1:
        return 'firefox';
      case agent.indexOf('safari') > -1:
        return 'safari';
      default:
        return 'other';
    }
}
  start(seq) {
    this.sequence = seq
    switch (this.sequence) {
      case 0:
        this.initialText =  this.exam_question.question;
        break;
      case 1:
        this.initialText =  this.exam_question.choice1;
        break;
      case 2:
        this.initialText =  this.exam_question.choice2;
        break;
      case 3:
        this.initialText =  this.exam_question.choice3;
        break;
      case 4:
        this.initialText =  this.exam_question.choice4;
        break;
      case 5:
        this.initialText =  this.exam_question.choice5;
        break;
      default:
    }
    this.service.lang = this.voice_language;
    this.started = true;
    this.service.start();
  }

  stop() {
    this.started = false;
    this.service.stop();
  }
  ngOnInit(): void {
    this.questionForm = this.formBuilder.group({
      question: ['', Validators.required],
      choice1: ['', Validators.required],
      choice2: ['', Validators.required],
      choice3: ['', Validators.required],
      choice4: ['', Validators.required],
      choice5: ['', Validators.required],
    });
  }

  listen_loop(e: SpeechRecognitionEvent) {

        let tmp ="";
        
        for(let i=0; i< e.results.length; i++) {
          tmp = tmp + e.results[i].item(0).transcript;
        }
        switch (this.sequence) {
          case 0:
            this.exam_question.question = this.initialText + tmp;
            break;
          case 1:
            this.exam_question.choice1 = this.initialText + tmp;
            break;
          case 2:
            this.exam_question.choice2 = this.initialText + tmp;
            break;
          case 3:
            this.exam_question.choice3 = this.initialText + tmp;
            break;
          case 4:
            this.exam_question.choice4 = this.initialText + tmp;
            break;
          case 5:
            this.exam_question.choice5;
            break;
          default:
        }

        console.log('RxComponent:onresult', this.sequence, e);

  }

  onSubmitCreate() {
    if(this.preProcess()){
      this.submitted = true;
      this.spinner.show();
      this.exam_question.id = 0;
      this.exam_question.exam_owner_id = 0;
      this.examConfigService.add_exam_question(this.exam_question)
      .pipe(first())
      .subscribe(
          data => {
              this.alertService.success("SUC0007", true);
              this.spinner.hide();
              this.router.navigate(['/theme/questionlist', this.exam_question.exam_config_id]);
          },
          error => {
              this.alertService.error(error);
              this.spinner.hide();
          });
    }

  }

  onSubmitEdit() {
    if(this.preProcess()){
      this.submitted = true;
      this.spinner.show();
      this.exam_question.exam_owner_id = 0;
      this.examConfigService.edit_exam_question(this.exam_question)
      .pipe(first())
      .subscribe(
          data => {
              this.alertService.success("SUC0007", true);
              this.spinner.hide();
              this.router.navigate(['/theme/questionlist', this.exam_question.exam_config_id]);
          },
          error => {
              this.alertService.error(error);
              this.spinner.hide();
          });
    }
  
  }
  preProcess(){
    this.alertService.clear();
    if(this.exam_question.choice1.length > 50000 || this.exam_question.choice2.length > 50000 || this.exam_question.choice3.length > 50000
      || this.exam_question.choice4.length > 50000 || this.exam_question.choice5.length > 50000 || this.exam_question.question.length > 50000){
      this.alertService.error("ERR0010", true);
      return false;
    }
    if(this.exam_question.question_type == 3){
      this.exam_question.choice1 = "";
      this.exam_question.choice2 = "";
      this.exam_question.choice3 = "";
      this.exam_question.choice4 = "";
      this.exam_question.choice5 = "";
      this.exam_question.negative_marks = 0;
    }else{
      if(this.total_question == 4){
        this.exam_question.choice5 = "";
      }else if(this.total_question == 3){
        this.exam_question.choice4 = "";
        this.exam_question.choice5 = "";
      }else if(this.total_question == 2){
        this.exam_question.choice3 = "";
        this.exam_question.choice4 = "";
        this.exam_question.choice5 = "";
      }else if(this.total_question == 1){
        this.exam_question.choice2 = "";
        this.exam_question.choice3 = "";
        this.exam_question.choice4 = "";
        this.exam_question.choice5 = "";
      }
    }
    return true;
  }
  updateTotalQuestion() {
    if(this.exam_question.question_type != 3){
      if(this.exam_question.choice5){
        this.total_question = 5;
      }else if(this.exam_question.choice4){
        this.total_question = 4;
      }else if(this.exam_question.choice3){
        this.total_question = 3;
      }else if(this.exam_question.choice2){
        this.total_question = 2;
      }else if(this.exam_question.choice1){
        this.total_question = 1;
      }
    }
  }
}