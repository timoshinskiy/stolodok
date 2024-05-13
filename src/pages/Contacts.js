import * as React from "react";
import {YMaps, Map, Placemark, RouteButton} from "@pbe/react-yandex-maps";
import {Link, NavLink} from "react-router-dom";

const Contacts = () => {

    return (
        <>
            <div className={"contacts_page"}>
                <div className={"contacts_first"}>
                    <h2>Мы находимся:</h2>
                    <h3>г.Гродно, ул. Весёлая </h3>
                    <YMaps>
                        <Map width={"100%"} height={"100%"} defaultState={{center: [53.638790, 23.833571], zoom: 14}}>
                            <Placemark geometry={[53.638790, 23.833571]}/>
                            <RouteButton options={{float: "right"}} data={{endpoint: [53.638790, 23.833571]}}/>
                        </Map>
                    </YMaps>
                </div>
                <div className={"contacts_back"}></div>
                <div className={"contacts_second"}>
                    <h3>Контактные телефоны для связи:</h3>
                    <h4>Руслан: <a href={"tel:PHONE_NUM"}>80297853825</a> <a href={"tel:PHONE_NUM"}>80297853825</a></h4>
                    <h3>Наша группа ВКонтакте : <a target={"_blank"} rel={"noopener noreferrer"}
                                                   href={"https://vk.com/sto_lodok"}>VK</a></h3>
                </div>
            </div>
        </>
    )
}

export default Contacts;