export interface Itask {
    title : string,
    author : string,
    descriptions : string,
    deadlines : string,
    priority : 'High' | 'Law' | 'moderate'
    process : 'to-do' | 'ongoing' | 'completed'
}