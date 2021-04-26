import {http} from './http'
import "./websocket/client"
import "./websocket/admin"
http.listen(90, () => {
    console.log('Servidor no ar! porta 90')
})