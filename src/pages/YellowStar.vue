<template>
  <div>
    <Page
      title-loc-key="TID_YELLOW_STAR"
      :content-args="{data: {ys}, iconDir: 'game/Stars'}"
      :portrait="{src: img, alt: 'yellowStar'}"
    />

    <v-data v-bind="{data: sectors, tableOpts: { lvlColKey: '№' }}" />
    <v-data v-bind="{data: { TID: 'LVLS_PLANETS', ...levels }, tableOpts: {mergeCells: false}}" />
    <v-data v-bind="{data: planetsYS, tableOpts: { lvlColKey: '№', mergeCells: false }}" />

  </div>
</template>

<!--suppress JSUnresolvedReference -->
<script setup>
import Page from '@/components/Page.vue';
import VData from '../components/Data.vue';

import stars from '@Data/stars.js';
import sectorsData from '@Data/yellow_star_sectors.js';
import levels from '@Data/planet_levels.js';
import planets from '@Data/planets.js';
import img from '@Img/game/portraits/portrait_WarpLane.jpg';

import compileOne from '@Utils/compileOne.ts';
const ys = { ...stars.YellowStar };
delete ys.Models;

const planetsYS = compileOne(planets, { filterByType: { path: 'planets.yellowstar' } });
planetsYS.TID2 = planetsYS.TID;
planetsYS.Moons = sectorsData.NumMoons.flat();
planetsYS.TID = 'PLANETS';
planetsYS.Name = 'Planets';


const sectors = {
    Name2: sectorsData.Name,
    ...sectorsData,
    BaseType: sectorsData.BaseType.map((v, i) => v ? ({ ...v, NumBases: sectorsData.NumBases[i] }) : null),
    TID: 'SECTORS',
    TID_Description: 'TID_YS_SECTORS_CUSTOM_DESCR',
    Name: 'yellow_star_sectors',
};
</script>
<style scoped src="../style/page.scss"  lang="scss"></style>
