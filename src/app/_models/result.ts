export class Result {
    id: number;
    exam_questions_id: number;
    question_type: number;
    exam_config_id: number;
    is_choice1_selected: number;
    is_choice2_selected: number;
    is_choice3_selected: number;
    is_choice4_selected: number;
    is_choice5_selected: number;
    is_choice1_correct: number;
    is_choice2_correct: number;
    is_choice3_correct: number;
    is_choice4_correct: number;
    is_choice5_correct: number;
    negative_marks: number;
    positive_marks: number;
    subjective_mark: number;
    answer: string;
}
