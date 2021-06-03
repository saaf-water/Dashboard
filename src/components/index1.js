import React from "react";
import useThemeDetector from "./Map"
import classNames from "./Map"
function Index() {
    return (
        <>
            <div class="grid m-10 w-auto h-screen flex justify-center items-center " >
                <div className="container grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8">
                    {/* Remove class [ h-24 ] when adding a card block */}
                    {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                    <div className="rounded border-gray-300  col-span-2 ">
                        <div class="flex flex-row">
                            <div class="flex-auto justify-center items-center lg:border lg:border-l border-t border-gray-300 dark:border-gray-700 lg:rounded-t-xl bg-white dark:bg-gray-800 h-80 overflow-auto no-scrollbar">
                                <div className="pb-8 lg:pb-5 flex items-start justify-center  w-screen  h-full">
                                    <iframe
                                        class={classNames(useThemeDetector() ? 'hidden' : 'block', 'border-gray-300 lg:rounded-t-xl')}
                                        width="100%"
                                        height="95%"
                                        frameborder="0"
                                        scrolling="no"
                                        marginheight="0"
                                        marginwidth="0"
                                        title="Saaf-Water-light"
                                        src="//www.arcgis.com/apps/Embed/index.html?webmap=fbadf2d08dd141aa8fbfe60a227e189b&extent=73.5435,15.0755,74.5577,15.6462&zoom=true&previewImage=false&scale=true&search=true&searchextent=true&disable_scroll=true&theme=light">
                                    </iframe>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="bg-gradient-to-r from-green-500 via-green-300 to-green-200 leading-10 rounded-3xl shadow-xl">
                        <div class="pt-8 px-6 pr-4 pb-8 ">
                            <div class="justify-self-start text-sm font-sans-semibold text-white space-y-6">Water Quality Summary </div>
                            <div class="justify-self-start content-center text-sm font-sans font-extrabold text-white text-4xl tracking-wide"> GOOD </div>
                            <div class="justify-self-start text-black-900 font-bold">+ Good boiling required before cosumption </div>
                            <div class="justify-self-start text-black-900 font-bold">+ Water suitable for direct domestic usage</div>
                        </div>

                    </div>
                </div>
                <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
                    {/*<!-- 1 card -->*/}
                    <div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">


                    </div>

                    {/*<!-- 2 card -->*/}
                    <div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
                    </div>

                    {/*<!-- 3 card -->*/}
                    <div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
                    </div>

                    {/*<!-- 4 card -->*/}
                    <div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">

                    </div>
                </div>
                <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 w-screen" />
            </div>
        </>
    );
}
export default Index;