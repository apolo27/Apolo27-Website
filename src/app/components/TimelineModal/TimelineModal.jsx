import React from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Description,
} from "@headlessui/react";
import Image from "next/image";
import './TimelineModal.css';

const TimelineModal = ({ isOpen, onClose, team }) => {
  if (!team) return null;

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 flex items-center justify-center p-4 text-white">
        <DialogPanel className="timeline-modal-panel">
          <DialogTitle className="timeline-modal-title">{team.year}</DialogTitle>
          <Description className="timeline-modal-content">
            <p className="timeline-modal-description">{team.description}</p>

            {/* Awards Section */}
            {team.teamAwards && (
              <div>
                <h3 className="timeline-modal-awards-title">Awards</h3>
                <ul className="timeline-modal-awards-list">
                  {team.teamAwards.map((award, index) => (
                    <li key={index} className="timeline-modal-award-item">
                      <div className="timeline-modal-award">
                        <div className="placeholder-image">
                          <Image
                            src={award.image || "/images/placeholder-image.webp"}
                            alt={award.title}
                            width={50}
                            height={50}
                            className={!award.image ? "placeholder" : ""}
                          />
                        </div>
                        <div>
                          <strong>{award.title}:</strong> {award.description}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Badges Section */}
            {team.badges && (
              <div className="timeline-modal-badges">
                <h3 className="timeline-modal-awards-title">Badges</h3>
                <div className="timeline-modal-members-grid">
                  {team.badges.map((badge, index) => (
                    <div key={index} className="timeline-modal-member-card">
                      <div className="placeholder-image">
                        <Image
                          src={badge.image || "/images/placeholder-image.webp"}
                          alt={badge.title}
                          width={50}
                          height={50}
                          className={!badge.image ? "placeholder" : ""}
                        />
                      </div>
                      <p className="timeline-modal-member-name">{badge.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Members Section */}
            {team.members && (
              <div className="timeline-modal-members">
                <h3 className="timeline-modal-members-title">Team Members</h3>
                <div className="timeline-modal-members-grid">
                  {team.members.map((member, index) => (
                    <div key={index} className="timeline-modal-member-card">
                      <div className="placeholder-image">
                        <Image
                          src={member.image || "/images/placeholder-image.webp"}
                          alt={member.name}
                          width={100}
                          height={100}
                          className={!member.image ? "placeholder" : ""}
                        />
                      </div>
                      <p className="timeline-modal-member-name">{member.name}</p>
                      <p className="timeline-modal-member-role">{member.role}</p>
                      <p className="timeline-modal-member-role">Group: {member.group}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </Description>
          <div className="timeline-modal-actions">
            <button className="timeline-modal-close-btn" onClick={onClose}>
              Close
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default TimelineModal;
