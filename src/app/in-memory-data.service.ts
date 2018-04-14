import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb()  {

        const bandas = [
            {   id: 0, nombre: 'Eminem'},
            {   id: 11, nombre: 'Linkin Park'},
            {   id: 12, nombre: 'Nirvana'},
            {   id: 13, nombre: 'Combichrist'},
            {   id: 14, nombre: 'swedish House Mafia'},
            {   id: 15, nombre: '50 Cent'},            
        ];
        return {bandas};
    }
}