import { UtilsService } from '../utils/cookie-helper';
import { AppConsts } from '../app-const';

export class SignalRAspNetCoreHelper {
    static initSignalR(): void {

        const encryptedAuthToken = new UtilsService().getCookieValue(AppConsts.authorization.encrptedAuthTokenName);

        // abp.signalr = {
        //     autoConnect: true,
        //     connect: undefined,
        //     hubs: undefined,
        //     qs: AppConsts.authorization.encrptedAuthTokenName + '=' + encodeURIComponent(encryptedAuthToken),
        //     remoteServiceBaseUrl: AppConsts.remoteServiceBaseUrl,
        //     startConnection: undefined,
        //     url: '/signalr'
        // };

        jQuery.getScript(AppConsts.appBaseUrl + '/assets/abp/abp.signalr-client.js');
    }
}
