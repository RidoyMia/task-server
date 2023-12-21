export interface Itask {
    title : string,
    author : string,
    descriptions : string,
    deadlines : string,
    priority : 'high' | 'Low' | 'moderate'
    process : 'to-do' | 'ongoing' | 'completed'
}