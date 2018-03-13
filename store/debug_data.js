// Debug data for emulate some server responses
export const state = () => ({
    requests: {
        'login': {
            token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sYXJhdmVsYXBpLmxvY1wvYXBpXC9sb2dpbiIsImlhdCI6MTUyMDk4MjEyOCwiZXhwIjoxNTIwOTg1NzI4LCJuYmYiOjE1MjA5ODIxMjgsImp0aSI6InRQRndLMzR1OTB6anRGYUwiLCJzdWIiOjEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.zrWY6q23e81A0sIlyLzd9jZoQGpn4Cqm6MQ7gYTL7ys", 
            token_type: "bearer", 
            expires_in: 3600
        },
        'user': {
            created_at: "2018-02-10 21:23:31",
            email: "relictos@mail.ru",
            id: 1,
            name: "relicto",
            photo_url: "https://www.gravatar.com/avatar/0a2871d93cd4927b6443506ad35dd5dc.jpg?s=200&d=mm",
            updated_at: "2018-02-13 19:18:08"
        }
    },
  })
  
  // getters
  export const getters = {
    requests: function(state){
        return state.requests
    }
  }