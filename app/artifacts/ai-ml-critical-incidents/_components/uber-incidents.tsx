import React from 'react'

const UberIncidentComponent = () => {
    return (
        <div>
            <div className="flex gap-4 mb-8">
                <div className="">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Cuo8eq9C3Ec?si=uudzuTIhzmb3JE2Z" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <div className="">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/BEGH9_XgkDQ?si=NnM1ThfRTxOyMVLR" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
                Both the Uber Tempe collision (2018) and the Tesla Mountain View crash (2018) highlight serious ethical concerns in autonomous and semi-autonomous driving systems. In the Uber case, dashcam footage shows the vehicle’s safety driver looking away from the road in the moments before impact. NTSB data and diagrams confirm that the pedestrian was visible to sensors for several seconds, yet no evasive action was taken. The Tesla case shows a driver relying heavily on Autopilot, becoming distracted by a mobile device, and failing to intervene when the system steered into a gore point at highway speeds. NTSB findings identified ineffective driver monitoring and overreliance on partial automation as key factors.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
                The core ethical issues cut across both incidents. First, corporate branding and product naming — “Autopilot” and “self-driving” — risk misleading users about system capabilities, fostering complacency. Second, regulation and procedural enforcement lag behind the technology. Uber’s operational safety driver oversight was inadequate, while Tesla’s driver monitoring allowed disengagement until it was too late. Third, operator negligence played a decisive role; both drivers were in supervisory roles but diverted attention from the driving task entirely.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
                These events show that when automation is introduced without clear limits, strong user engagement safeguards, and accurate public communication, the result can be fatal. Future development and deployment must integrate rigorous driver monitoring, conservative branding, and regulatory frameworks that hold both companies and operators accountable.
            </p>
        </div>
    )
}

export default UberIncidentComponent