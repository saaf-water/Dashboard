import React from "react";

const Summary = ({ current }) => {

  return (
    <>
        {(() => {
            if (current.summary === 1) {
                return (
                    <>
                        <div className="justify-self-start font-roboto-semibold text-white text-xl py-5">Water Quality Summary </div>
                        <div className="justify-self-start content-center font-roboto font-extrabold text-white text-6xl pb-5">Good</div>
                        <div className="justify-self-start text-black-900 font-bold p-2">+ Good boiling required before cosumption</div>
                        <div className="justify-self-start text-black-900 font-bold p-2">+ Water suitable for direct domestic usage</div>
                    </>
                )
            } else if (current.summary === 2) {
                return (
                    <>
                        <div className="justify-self-start font-roboto-semibold text-white text-xl py-5">Water Quality Summary </div>
                        <div className="justify-self-start content-center font-roboto font-extrabold text-white text-6xl pb-5">Good</div>
                        <div className="justify-self-start text-black-900 font-bold p-2">+ Good boiling required before cosumption</div>
                        <div className="justify-self-start text-black-900 font-bold p-2">+ Water suitable for direct domestic usage</div>
                    </>
                )
            } else if (current.summary === 3) {
                return (
                    <>
                        <div className="justify-self-start font-roboto-semibold text-white text-xl py-5">Water Quality Summary </div>
                        <div className="justify-self-start content-center font-roboto font-extrabold text-white text-6xl pb-5">Good</div>
                        <div className="justify-self-start text-black-900 font-bold p-2">+ Good boiling required before cosumption</div>
                        <div className="justify-self-start text-black-900 font-bold p-2">+ Water suitable for direct domestic usage</div>
                    </>
                )
            }else {
                return (
                    <>
                        <div className="justify-self-start font-roboto-semibold text-white text-xl py-5">Water Quality Summary </div>
                        <div className="justify-self-start content-center font-roboto font-extrabold text-white text-6xl pb-5">Good</div>
                        <div className="justify-self-start text-black-900 font-bold p-2">+ Good boiling required before cosumption</div>
                        <div className="justify-self-start text-black-900 font-bold p-2">+ Water suitable for direct domestic usage</div>
                    </>
                )
            }
        })()}
    </>
  );
};
export default Summary;

