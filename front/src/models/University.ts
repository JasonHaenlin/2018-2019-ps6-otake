import { Language } from './Language';
import { GeographicalArea } from './GeographicalArea';

export interface University {
  id: number;
  name?: string;
  admission_rate?: number;
  type_of_file?: string;
  cost_of_living?: number;
  nb_of_place?: number;
  small_picture?: string;
  city?: string;
  country?: string;
  area?: GeographicalArea;
  major?: string[];
  language?: Language[];
}
