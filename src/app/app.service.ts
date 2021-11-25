import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface MoviesListId {
    'popular': number[],
    'keepWatching': number[],
}

export interface UserInterface {  
    "token": string,
    "users": [
        {
            "id": number,
            "name": string,
            "avatarUrl": string,
        },
        {
            "id": number,
            "name": string,
            "avatarUrl": string,
        }
    ]
}

export interface MovieInterface {
    "cardImage": string,
    "titleImage": string,
    "backgroundImage": string,
    "relevance": number,
    "year": number,
    "minAge": number,
    "time": number,
    "season": null,
    "description": string,
    "cast": string[],
    "genre": string[],
    "scenes": string[]
}

@Injectable({ providedIn: 'root'})
export class AppService {
    constructor(private http: HttpClient) { }
    userMoviesId: string = ''
    movieInfo: string = ''
    loginUrl: string =''
    
    getUserMoviesId(userId: number): Observable<MoviesListId>  {
        this.userMoviesId = `https://private-3923c4-santandercoders809.apiary-mock.com/users/${userId}`
        return this.http.get<MoviesListId>(this.userMoviesId);
    }

    getMovieInfo(movieId: number): Observable<MovieInterface> {
        this.movieInfo = `https://private-3923c4-santandercoders809.apiary-mock.com/series/${movieId}`;
        return this.http.get<MovieInterface>(this.movieInfo);
    }

    login(email: string, senha: string): Observable<UserInterface> {
        this.loginUrl = 'https://private-3923c4-santandercoders809.apiary-mock.com/login'
        return this.http.post<UserInterface>(this.loginUrl, {email, senha})
    }
} 

