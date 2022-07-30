/**
 * Just one responsability: It has the interfase of the API
 */

export interface TodoType {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
}
