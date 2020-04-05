import { environment as ENV } from '../environments/environment';

export default class AppSettings {
  public static ZONES_API_ENDPOINT = `${ENV.apiUrl}/zones`;
}
