require(['./config'],()=>{
    require(['template','header','footer'],(template)=>{
        class List{
            constructor(){
                this.getListGoods()
            }
            getListGoods(){
                $.get('http://rap2api.taobao.org/app/mock/226848/list/get',resp=>{
                    console.log(resp)
                    console.log(template)
                    let str = template('list-ul', {list: resp.body.list})
                    // console.log(str)
                    $('#list-goods ul').html(str)
                })
            }
        }
        new List()
    })
})