export class ExamQuestion {
    id: number;
    exam_owner_id: number;
    question: string;
    choice1: string = "";
    choice2: string = "";
    choice3: string = "";
    choice4: string = "";
    choice5: string = "";
    is_choice1_correct: number = 0;
    is_choice2_correct: number = 0; 
    is_choice3_correct: number = 0; 
    is_choice4_correct: number = 0; 
    is_choice5_correct: number = 0;     
    question_type: number = 0;
    exam_config_id: number;
    positive_marks: number;
    negative_marks: number;
}