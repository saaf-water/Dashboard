/* Map.js contains code which shows the map page*/

// Copyright 2021 Saaf water
// Map component

import React, { useRef, useEffect } from 'react';
import { loadModules } from 'esri-loader';



export default function Map() {
  const MapEl=useRef(null)

  useEffect(
    ()=>{
      let view;
      //let url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTC96UNkmoscLTYpCifCfoY8mE7BTT0QafhnG1TMXyn3ddWHtIDRjReS2RnZNa-qLJi2TccXJtvSBL4/pub?gid=0&single=true&output=csv";

      loadModules(["esri/config","esri/views/MapView","esri/WebMap","esri/layers/CSVLayer","esri/layers/FeatureLayer","esri/widgets/Search","esri/widgets/Home"],{
        css:true
      }).then(([esriConfig,MapView,WebMap,CSVLayer,FeatureLayer,Search,Home])=>{
        //eslint-disable-next-line
          {/*
          let csvLayer = new CSVLayer({
            url: url,
           });
          */}      
          
          esriConfig.apiKey = "AAPK8f070f4a6eda4ace8a8b768eba6d00d5UK26MjwuqK6dnD4dqZFTF65x0K2ZTUJ9ymU1uecZNW6R7_gO6Aw0_K8kYGughqYK";

          const defaultSym = {
            type: "simple-marker",
            //color: "#333333",
            size: 25,
            outline: {
              color: [0, 0, 0, 0],
              width: 1
            }
          };

          const SaafWaterSym = {
            type: "simple-marker",
            color: "rgba(0, 255, 117, 0.7)",
            size: 30,
            outline: {
              color: [0, 0, 0, 0],
              width: 1
            }
          };
          
          const rendererGW = {
            type: "simple", 
            symbol: defaultSym,
            visualVariables: [
              {
                type: "color",
                field: "Summary",
                //normalizationField: "Summary",
                legendOptions: {
                  title: "Summary"
                },
                stops: [
                  {
                    value: 0,
                    //size: 40,
                    color: "rgba(242, 88, 88, 0.63)",
                    label: "<10%"
                  },
                  {
                    value: 1,
                    //size: 20,
                    color: "rgba(255, 122, 0, 0.63)",
                    label: ">30%"
                  },
                  {
                    value: 2,
                    //size: 12,
                    color: "rgba(219, 255, 0, 0.7)",
                    label: "<10%"
                  },
                  {
                    value: 3,
                    //size: 5,
                    color: "rgba(0, 255, 117, 0.7)",
                    label: "<10%"
                  },
                ]
                
              }
            ]
          };
          const rendererSW = {
            type: "simple", 
            symbol: SaafWaterSym,
            visualVariables: [
              {
                type: "size",
                field: "summary",
                normalizationField: "summary",
                legendOptions: {
                  title: "summary"
                },
                
                
              }
            ]
          };
          const GoundWaterQuality = new FeatureLayer({
            url: "https://services3.arcgis.com/7bNIiHtQzkfdSJfA/arcgis/rest/services/copy_of_ground_water_quality_goa_sheet1/FeatureServer/0",
            renderer: rendererGW,
            title: "Summary",
            popupTemplate: {
              title: "Water Quality: {SummaryText}",
              content:
                "Temperature: {Temperature}"+
                "<br>pH: {pH}"+
                "<br>EC: {EC}"+
                "<br>TDS: {TDS}"+
                "<br>Summary Value: {Summary}" + 
                "<br>Place: {StationName}" + 
                "<br>Latitude: {Latitude}" + 
                "<br>Longitude: {Longitude}",
            }
          });

          const SaafWaterDeviceReadings = new FeatureLayer({
            url: "https://services3.arcgis.com/7bNIiHtQzkfdSJfA/arcgis/rest/services/saafwater_sheet1/FeatureServer/0",
            renderer: rendererSW,
            title: "Summary",
            popupTemplate: {
              title: "Pump ID: {id}",
              content:
                "Temperature: {temperature}"+
                "<br>pH: {ph}"+
                "<br>EC: {ec}"+
                "<br>TDS: {tds}"+
                "<br>Summary Value: {summary}" + 
                "<br>Place: {area}" + 
                "<br>Latitude: {latitude}" + 
                "<br>Longitude: {longitude}",
            }
          });

          const webmap = new WebMap({
            basemap: 'topo-vector',
            layers: [GoundWaterQuality,SaafWaterDeviceReadings],
          })

          view = new MapView({
            map: webmap,
            center:[73.847052, 15.478381],
            zoom:13,
            container: MapEl.current,
            
          })

          const search = new Search({
            view: view
          });

          let homeWidget = new Home({
            view: view
          });
          
          view.ui.add(homeWidget, "top-left");
          view.ui.add(search, "top-right");

           //webmap.add(csvLayer);

      })

      return()=>{
        if(!!view){
          view.destroy()
          view = null
        }
      }
    })

  return (
    <div style={{height:'100%', width:'100%'}} ref={MapEl}>
    </div>
  );
}