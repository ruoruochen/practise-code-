export function usePromiseCatchTest(){
    Promise.resolve('1').then(res => {
        this.loading = false
        this.handleClose()
    })
    
    Promise.resolve('1').then(res => {
        this.loading = false
        this.handleClose()
    }).catch(e=>{
        console.log(e)
    })
}