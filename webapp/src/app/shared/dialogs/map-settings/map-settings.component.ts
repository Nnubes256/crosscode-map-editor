import {Component, Inject, OnInit} from '@angular/core';
import {MD_DIALOG_DATA, MdDialogRef} from '@angular/material';
import {CrossCodeMap} from '../../interfaces/cross-code-map';
import {MapLoaderService} from '../../map-loader.service';
import {CCMap} from '../../phaser/tilemap/cc-map';

@Component({
	selector: 'app-map-settings',
	templateUrl: './map-settings.component.html',
	styleUrls: ['./map-settings.component.scss']
})
export class MapSettingsComponent {

	private tileMap: CCMap;

	settings: CrossCodeMap = <any>{
		levels: [{height: -32}, {height: 0}, {height: 32}, {height: 64}],
		attributes: {},
	};

	constructor(private loader: MapLoaderService, public ref: MdDialogRef<MapSettingsComponent>) {
		this.tileMap = loader.tileMap.getValue();
		const tileMap = this.tileMap;

		if (!tileMap) {
			return;
		}
		const settings = this.settings;
		settings.mapWidth = tileMap.mapWidth;
		settings.mapHeight = tileMap.mapHeight;
		settings.levels = tileMap.levels;
		settings.masterLevel = tileMap.masterLevel;
		settings.attributes = tileMap.attributes;
	}

	update() {
		// TODO: add validation
		const settings = this.settings;
		const tileMap = this.tileMap;

		tileMap.levels = settings.levels;
		tileMap.masterLevel = settings.masterLevel;
		tileMap.attributes = settings.attributes;

		tileMap.resize(settings.mapWidth, settings.mapHeight);

		this.ref.close();
	}
}
