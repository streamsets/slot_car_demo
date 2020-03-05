import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';


@Injectable()
export class RacingService {
    private headers = new HttpHeaders()
        .set('X-SDC-APPLICATION-ID', 'microservice')
        .append('Content-Type', 'application/json')
        .append('Access-Control-Allow-Origin', '*');

    private endpoint = 'http://localhost:8000/rest/v1';


    constructor(private http: HttpClient) {

    }

    private handleError(error) {
            let errorMessage = '';
            if (error.error instanceof ErrorEvent) {
                // client-side error
                errorMessage = `Error: ${error.error.message}`;
            } else {
                // server-side error
                errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
            }
            return throwError(errorMessage);
    }

    getLaps(player: number, game: number): Observable<Lap[]> {
        return this.http
            .get<Lap[]>(`${this.endpoint}/laps?player=${player}&game=${game}`, { headers: this.headers })
            .pipe(catchError(this.handleError));
    }

    getPlayer(player: number): Observable<any> {
        return this.http
            .get(`${this.endpoint}/player?player=${player}`, { headers: this.headers })
            .pipe(catchError(this.handleError));
    }

    // isWinner(player: number): Observable<any> {
    //     return this.http
    //         .get(`${this.endpoint}/iswinner?player=${player}`, { headers: this.headers })
    //         .pipe(catchError(this.handleError));
    // }

    games(): Observable<FinishedGame[]> {
        return this.http
            .get<FinishedGame[]>(`${this.endpoint}/games`, { headers: this.headers })
            .pipe(catchError(this.handleError));
    }

    currentGame(): Observable<Game[]> {
        return this.http
            .get<Game[]>(`${this.endpoint}/current_game`, { headers: this.headers })
            .pipe(catchError(this.handleError));
    }

    bestLaps(): Observable<any> {
        return this.http
            .get<Game[]>(`${this.endpoint}/bestlaps`, { headers: this.headers })
            .pipe(catchError(this.handleError));
    }

    bestRaces(): Observable<any> {
        return this.http
            .get<Game[]>(`${this.endpoint}/bestraces`, { headers: this.headers })
            .pipe(catchError(this.handleError));
    }

    newGame(game: NewGame): Observable<any> {
        return this.http
            .post(`${this.endpoint}/newgame`, game, { headers: this.headers })
            .pipe(catchError(this.handleError));
    }
}

export interface Lap {
    id: number;
    game: number;
    number: number;
    duration: number;
    player: number;
    time: number;
}

export interface Player {
    id: number;
    name: string;
    email: string;
    phone: string;
    optin: boolean;
}

export interface Game {
    id: number;
    start_time: number;
    stop_time: number;
    player1: Player;
    player2: Player;
    winner: number;
}

export interface FinishedGame {
    id: number;
    player1: string;
    player2: string;
    start_time: number;
    winner: string;
}

export interface NewGame {
    player1: Player;
    player2: Player;
}
