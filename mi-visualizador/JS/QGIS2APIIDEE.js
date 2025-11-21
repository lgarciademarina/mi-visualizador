
                                
            // Configuración del mapa
            let zoomInicial = 5
            let longLatInicial = [-3, 40]
            const zoom_p = IDEE.config.MAP_VIEWER_ZOOM || zoomInicial;
            const center_p = IDEE.config.MAP_VIEWER_CENTER || ol.proj.fromLonLat(longLatInicial);
            
            IDEE.proxy(false) // Necesario para ejecutar el visualizador en local.
            const mapajs = IDEE.map({
                container: 'mapaJS_div',
                controls: ['location', 'panzoom', 'scaleline'],
                bbox: [-559168.4454802554, 4837970.394322945, -266842.8731949056, 5024802.260727582]
            });
            
            const layers_p = IDEE.config.MAP_VIEWER_LAYERS || [];
            mapajs.addLayers(layers_p)

            
                                mapajs.addWMS(
                                     new IDEE.layer.WMS({
                                            url: 'https://www.ign.es/wms-inspire/pnoa-ma',
                                            name: "OI.OrthoimageCoverage",
                                            legend: "Ortoimagen",
                                            tiled: false,
                                            visibility: true,
                                        }, 
                                        {
                                            format: 'image/png'
                                        })
                                );

                                mapajs.getLayers().filter( (layer) => layer.legend == "Ortoimagen" )[0].setZIndex(98)
                                
                                var js_ComunidaddeMadrid = document.createElement("script");
                                js_ComunidaddeMadrid.type = "text/javascript";
                                js_ComunidaddeMadrid.async = false;
                                js_ComunidaddeMadrid.src = "./Sources/ComunidaddeMadrid.js";
                                document.head.appendChild(js_ComunidaddeMadrid);
                                js_ComunidaddeMadrid.addEventListener('load', () => {
                                
                                    mapajs.addLayers(
                                        new IDEE.layer.GeoJSON({
                                                source: ComunidaddeMadrid, 
                                                name: 'ComunidaddeMadrid',
                                                legend: "ComunidaddeMadrid",
                                                extract: true,
                                            }, {
                                            // aplica un estilo a la capa
                                                style: new IDEE.style.Generic({
                                            point: {
                                                fill: {
                                                    color: 'rgb(255, 153, 0)',
                                                    opacity: 0.4980392156862745,
                                                },
                                                stroke: {
                                                    color: 'rgb(255, 102, 0)',
                                                    opacity: 1.0,
                                                    width: 2.0, 
                                                }
                                            },
                                            polygon: {
                                                fill: {
                                                    color: 'rgb(255, 153, 0)',
                                                    opacity: 0.4980392156862745,
                                                },
                                                stroke: {
                                                    color: 'rgb(255, 102, 0)',
                                                    opacity: 1.0,
                                                    width: 2.0, 
                                                }
                                            },
                                            line: {
                                                fill: {
                                                    color: 'rgb(255, 153, 0)',
                                                    opacity: 0.4980392156862745,
                                                },
                                                stroke: {
                                                    color: 'rgb(255, 102, 0)',
                                                    opacity: 1.0,
                                                    width: 2.0, 
                                                }
                                            }
                                        }),
                                                visibility: true // capa no visible en el mapa
                                            }, {
                                                opacity: 1 // aplica opacidad a la capa
                                            })
                                    );

                                    mapajs.getLayers().filter( (layer) => layer.legend == "ComunidaddeMadrid" )[0].setZIndex(99)

                                });
                                
                                var js_InstitutoGeográficoNacional = document.createElement("script");
                                js_InstitutoGeográficoNacional.type = "text/javascript";
                                js_InstitutoGeográficoNacional.async = false;
                                js_InstitutoGeográficoNacional.src = "./Sources/InstitutoGeográficoNacional.js";
                                document.head.appendChild(js_InstitutoGeográficoNacional);
                                js_InstitutoGeográficoNacional.addEventListener('load', () => {
                                
                                    mapajs.addLayers(
                                        new IDEE.layer.GeoJSON({
                                                source: InstitutoGeográficoNacional, 
                                                name: 'InstitutoGeográficoNacional',
                                                legend: "InstitutoGeográficoNacional",
                                                extract: true,
                                            }, {
                                            // aplica un estilo a la capa
                                                style: new IDEE.style.Generic({
                                            point: {
                                                fill: {
                                                    color: 'rgb(190, 207, 80)',
                                                    opacity: 1.0,
                                                },
                                                stroke: {
                                                    color: 'rgb(35, 35, 35)',
                                                    opacity: 1.0,
                                                    width: 0.0, 
                                                }
                                            },
                                            polygon: {
                                                fill: {
                                                    color: 'rgb(190, 207, 80)',
                                                    opacity: 1.0,
                                                },
                                                stroke: {
                                                    color: 'rgb(35, 35, 35)',
                                                    opacity: 1.0,
                                                    width: 0.0, 
                                                }
                                            },
                                            line: {
                                                fill: {
                                                    color: 'rgb(190, 207, 80)',
                                                    opacity: 1.0,
                                                },
                                                stroke: {
                                                    color: 'rgb(35, 35, 35)',
                                                    opacity: 1.0,
                                                    width: 0.0, 
                                                }
                                            }
                                        }),
                                                visibility: true // capa no visible en el mapa
                                            }, {
                                                opacity: 1 // aplica opacidad a la capa
                                            })
                                    );

                                    mapajs.getLayers().filter( (layer) => layer.legend == "InstitutoGeográficoNacional" )[0].setZIndex(100)

                                });
                                

            
                            const mp_selectorCapa = new IDEE.plugin.Layerswitcher({
                                    position: 'TR',
                                    collapsed: false,
                                    collapsible: true,
                                    https: true,
                                    http: true,
                                    showCatalog: true,
                                    displayLabel: false,
                                    addLayers: true,
                                    statusLayers: true,
                                    modeSelectLayers: 'eyes', // opciones: 'eyes', 'radio'
                                    isMoveLayers: true,
                                    tools: ['transparency', 'legend', 'zoom', 'information', 'style', 'delete']
                                });

                            mapajs.addPlugin(mp_selectorCapa);
                           
                                        
        