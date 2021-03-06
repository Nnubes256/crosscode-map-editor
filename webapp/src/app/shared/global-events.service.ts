import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {EditorView} from './interfaces/editor-view';
import {CCEntity} from './phaser/entities/cc-entity';
import {Subject} from 'rxjs/Subject';
import {MapEntity, Point} from './interfaces/cross-code-map';

@Injectable()
export class GlobalEventsService {

	currentView: BehaviorSubject<EditorView> = new BehaviorSubject(null);
	selectedEntity: BehaviorSubject<CCEntity> = new BehaviorSubject(null);
	showAddEntityMenu: Subject<{ worldPos: Point, definitions: any }> = new Subject();
	generateNewEntity: Subject<MapEntity> = new Subject();
	loadComplete: Subject<boolean> = new Subject();

	constructor() {
	}

}
