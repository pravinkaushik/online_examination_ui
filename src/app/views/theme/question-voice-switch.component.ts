import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { QuestionVoiceComponent } from './question/question-voice.component';
import { QuestionComponent } from './question/question.component';

@Component({
  selector: 'app-question-voice-switch',
  template: '<div #container></div>'
})
export class QuestionVoiceSwitchComponent implements AfterViewInit{
  title: string = 'Verification Component';
  valid = false;
  @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }
  ngAfterViewInit() {
    if(this.getBrowserName() == "chrome"){
        this.valid = true;
    }
    if (this.valid ) {
      this.loadComponent(QuestionVoiceComponent);
    } else {
      this.loadComponent(QuestionComponent);
    }
}
  loadComponent(component: any) {
    const factory =    this.componentFactoryResolver.resolveComponentFactory(component);
    const ref = this.container.createComponent(factory);
    ref.changeDetectorRef.detectChanges();
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
}