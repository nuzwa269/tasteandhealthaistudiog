import React, { useState } from 'react';
import { X, Calendar as CalendarIcon, Users, Clock, CheckCircle2 } from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [guests, setGuests] = useState(2);
  const [date, setDate] = useState('2026-07-24');
  const [time, setTime] = useState('18:30');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
      ></div>

      <div className="relative bg-[#F6F5F0] rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#E3E0D4] z-10">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-[#4E5C54] hover:bg-[#EFECE3] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-serif text-3xl text-[#1C2621]">Table Reserved!</h3>
            <p className="text-sm text-[#4E5C54]">
              We look forward to hosting you on <span className="font-semibold">{date}</span> at <span className="font-semibold">{time}</span> for <span className="font-semibold">{guests} guests</span>. A confirmation email has been sent to {email || 'your inbox'}.
            </p>
            <button
              onClick={resetForm}
              className="mt-6 px-8 py-3 bg-[#3E5C49] text-white rounded-lg text-sm font-medium hover:bg-[#324B3B] transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#5E6D62]">
                TASTE &amp; HEALTH
              </span>
              <h3 className="font-serif text-3xl text-[#1C2621] font-normal mt-1">
                Book a Table
              </h3>
              <p className="text-xs text-[#526057] mt-1">
                88 Botanical Way, Garden District, NY 10012
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Party Size */}
              <div>
                <label className="block text-xs font-semibold uppercase text-[#4E5C54] mb-1.5">
                  Party Size
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setGuests(num)}
                      className={`flex-1 py-2 text-sm font-semibold rounded-lg border transition-all ${
                        guests === num
                          ? 'bg-[#3E5C49] text-white border-[#3E5C49]'
                          : 'bg-white border-[#D8D4C7] text-[#1C2621] hover:bg-[#EFECE3]'
                      }`}
                    >
                      {num} {num === 6 ? '+' : ''}
                    </button>
                  ))}
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-[#4E5C54] mb-1.5">
                    Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      required
                      className="w-full bg-white border border-[#D8D4C7] rounded-lg px-3 py-2 text-sm text-[#1C2621] focus:outline-none focus:border-[#3E5C49]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-[#4E5C54] mb-1.5">
                    Time
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full bg-white border border-[#D8D4C7] rounded-lg px-3 py-2 text-sm text-[#1C2621] focus:outline-none focus:border-[#3E5C49]"
                  >
                    <option value="12:00">12:00 PM (Lunch)</option>
                    <option value="13:30">1:30 PM (Lunch)</option>
                    <option value="17:30">5:30 PM (Dinner)</option>
                    <option value="18:30">6:30 PM (Dinner)</option>
                    <option value="20:00">8:00 PM (Dinner)</option>
                    <option value="21:00">9:00 PM (Late Dinner)</option>
                  </select>
                </div>
              </div>

              {/* Guest Details */}
              <div>
                <label className="block text-xs font-semibold uppercase text-[#4E5C54] mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Marcus Vance"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full bg-white border border-[#D8D4C7] rounded-lg px-3 py-2 text-sm text-[#1C2621] focus:outline-none focus:border-[#3E5C49]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-[#4E5C54] mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="marcus@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-white border border-[#D8D4C7] rounded-lg px-3 py-2 text-sm text-[#1C2621] focus:outline-none focus:border-[#3E5C49]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-[#4E5C54] mb-1.5">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="(212) 555-0199"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="w-full bg-white border border-[#D8D4C7] rounded-lg px-3 py-2 text-sm text-[#1C2621] focus:outline-none focus:border-[#3E5C49]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-[#4E5C54] mb-1.5">
                  Dietary / Special Notes
                </label>
                <input
                  type="text"
                  placeholder="e.g. Severe peanut allergy, window table preferred"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-white border border-[#D8D4C7] rounded-lg px-3 py-2 text-sm text-[#1C2621] focus:outline-none focus:border-[#3E5C49]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 mt-2 rounded-lg bg-[#3E5C49] hover:bg-[#324B3B] text-white font-medium text-sm transition-all shadow-md"
              >
                Confirm Table Reservation
              </button>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
