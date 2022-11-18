import {useContext} from "react";
import { AuthContext } from "../../context/AuthContext";
import './styles.css'

const Home = () =>{
    const auth = useContext(AuthContext)

    const mock = 
        {user:{
            fullName:'matheus lira barbosa',
            email:'matheus_lira13@hotmail.com',
            phone:'(13)974208098',
            address:' rua vereador jose vicente de barros'
        }}
    
        const mockMoney = [
             {type:'cashout', data:'20/08/2022', horario:'12:00', valor:'R$ 24,39'},
             {type:'cashout', data:'19/05/2022', horario:'09:00', valor:'R$ 50,82'},
             {type:'cashout', data:'02/01/2022', horario:'13:00', valor:'R$ 444,77'},
             {type:'cashout', data:'31/12/2021', horario:'16:00', valor:'R$ 556,59'},
             {type:'cashout', data:'14/07/2021', horario:'17:00', valor:'R$ 737,00'},
             {type:'cashout', data:'29/05/2021', horario:'07:00', valor:'R$ 454,15'},
             {type:'cashout', data:'03/06/2021', horario:'22:00', valor:'R$ 10,40'},
             {type:'cashin', data:'20/08/2022', horario:'12:00', valor:'R$ 24,39'},
             {type:'cashin', data:'19/05/2022', horario:'09:00', valor:'R$ 50,82'},
             {type:'cashin', data:'02/01/2022', horario:'13:00', valor:'R$ 444,77'},
             {type:'cashin', data:'31/12/2021', horario:'16:00', valor:'R$ 556,59'},
             {type:'cashin', data:'14/07/2021', horario:'17:00', valor:'R$ 737,00'},
             {type:'cashin', data:'29/05/2021', horario:'07:00', valor:'R$ 454,15'},
             {type:'cashin', data:'03/06/2021', horario:'22:00', valor:'R$ 10,40'},
    ]

    return(
        <div className="container">
            <div className="subContainer">
            <div className="profileInfo">
                <img src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Clipart.png" alt="profile img"/>
                <h2 className="userName"> {auth.user?.name}</h2> 
                <p className="userEmail"> {auth.user?.email}</p> 
                <p className="userEmail"> {auth.user?.balance}</p> 
           </div>
           <div className="userInfoComplete">
                <div className="containerUserInfoComplete">
                    <img className="iconSocialMedia" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
                    <label className="fullName"> GitHub </label> 
                    <p className="userEmail"> {auth.user?.email}</p> 
                </div>
                <div className="containerUserInfoComplete">
                <img className="iconSocialMedia" src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png" />
                    <label className="fullName"> Linkedin </label> 
                    <p className="userEmail"> {auth.user?.email}</p> 
                </div>
                <div className="containerUserInfoComplete">
                <img className="iconSocialMedia" src="https://assets.stickpng.com/images/5ecec78673e4440004f09e77.png" />
                    <label className="fullName"> Instagran: </label> 
                    <p className="userEmail"> {auth.user?.email}</p> 
                </div>
                <div className="containerUserInfoComplete">
                <img className="iconSocialMedia" src="https://cdn-icons-png.flaticon.com/512/1051/1051309.png" />
                    <label className="fullName"> Facebook: </label> 
                    <p className="userEmail"> {auth.user?.email}</p> 
                </div>
           </div>
           </div>
           <div className="subContainer">
           <div className="cashoutContainer">
                    <h3>Transferir</h3>
                <div className="containerUserInfoComplete">
                    <label className="fullName"> E-mail: </label> 
                    <input type="email" />
                    <button> Transferir</button>
                </div>
           </div>
            <div className="histoeyContainer">
                    <h3>Historico  de transacaoes</h3>
                    <table >
                        <tr>
                            <th>Type</th>
                            <th>Data</th>
                            <th>Horario</th>
                            <th>Valor</th>
                           
                            <th><input type="text" placeholder="Pesquisar"/></th>
                        </tr>
                        {mockMoney.map((e)=>{
                            return(
                                <tr>
                            <td>{e.type} </td>
                            <td>{e.data} </td>
                            <td>{e.horario} </td>
                            <td>{e.valor} </td>
                        </tr>
                            )
                        })}
                       
                       
                    </table>
           </div>
           
           </div>
        </div>
    )
}

export default Home