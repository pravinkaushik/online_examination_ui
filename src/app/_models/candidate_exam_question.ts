export class CandidateExamQuestion {
    id: number;
    candidate_id: number;
    exam_questions_id: number;
    question: string;
    answer: string;
    choice1: string = "";
    choice2: string = "";
    choice3: string = "";
    choice4: string = "";
    choice5: string = "";
    is_choice1_selected: number = 0;
    is_choice2_selected: number = 0; 
    is_choice3_selected: number = 0; 
    is_choice4_selected: number = 0; 
    is_choice5_selected: number = 0;     
    exam_config_id: number;
    positive_marks: number;
    negative_marks: number;
    question_type: number;
    radio_button_selected: any;
    subjective_mark: number = 0;
}