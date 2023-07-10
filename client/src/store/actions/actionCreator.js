import { AYAM_FETCH_MENUS, FETCH_MENU, IKAN_FETCH_MENUS, MINUMAN_FETCH_MENUS, SAPI_FETCH_MENUS, SARAPAN_FETCH_MENUS } from "./actionType"
const baseUrl = "https://mcd-server.jatisuryo.com/";

export const fetchAyamMenus = (payload) => {
    return {
        type: AYAM_FETCH_MENUS,
        payload: payload
    }
}
export const fetchSarapanMenus = (payload) => {
    return {
        type: SARAPAN_FETCH_MENUS,
        payload: payload
    }
}
export const fetchMinumanMenus = (payload) => {
    return {
        type: MINUMAN_FETCH_MENUS,
        payload: payload
    }
}
export const fetchIkanMenus = (payload) => {
    return {
        type: IKAN_FETCH_MENUS,
        payload: payload
    }
}
export const fetchSapiMenus = (payload) => {
    return {
        type: SAPI_FETCH_MENUS,
        payload: payload
    }
}
export const fetchMenuSuccess = (payload) => {
    return {
        type: FETCH_MENU,
        payload: payload
    }
}

export const fetchMenus = () => {
    return async (dispatch) => {
        try {
            let response = await fetch(baseUrl+ "customer/menu");
            let result = await response.json();
            // console.log(result);
            result.items.forEach((el) => {
                // console.log(el);
                switch (el.name) {
                    case "Sarapan Pagi":
                        dispatch(fetchSarapanMenus(el.Items));
                        break;
                    case "Ayam":
                        dispatch(fetchAyamMenus(el.Items));
                        break;
                    case "Ikan":
                        dispatch(fetchIkanMenus(el.Items));
                        break;
                    case "Daging Sapi":
                        dispatch(fetchSapiMenus(el.Items));
                        break;
                    case "Minuman":
                        dispatch(fetchMinumanMenus(el.Items));
                        break;
                    default:
                        break;
                }
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export const fetchMenuDetail = (id) => {
    return async (dispatch) => {
        try {
            let response = await fetch(baseUrl+'customer/menu/'+id);
            let result = await response.json();
            // console.log(result);
            dispatch(fetchMenuSuccess(result.result))
        } catch (error) {
            console.log(error);
        }
    }
}

