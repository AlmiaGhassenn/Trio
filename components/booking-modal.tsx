"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Calendar, Clock, User, Mail, Phone, MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTranslations } from "@/lib/locale-context"

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
}

const timeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
]

const availableDays = [
  { day: "Mon", date: "28", available: true },
  { day: "Tue", date: "29", available: true },
  { day: "Wed", date: "30", available: true },
  { day: "Thu", date: "1", available: false },
  { day: "Fri", date: "2", available: true },
  { day: "Sat", date: "3", available: false },
  { day: "Sun", date: "4", available: false },
]

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const t = useTranslations()
  const [selectedDay, setSelectedDay] = useState<string | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedDay || !selectedTime) return

    const subject = encodeURIComponent(t.bookingModal.emailSubject)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nPreferred Date: ${selectedDay}\nPreferred Time: ${selectedTime}\nMessage: ${formData.message}`
    )
    
    window.location.href = `mailto:hello@trio.agency?subject=${subject}&body=${body}`
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed left-1/2 top-1/2 z-[101] w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-border bg-card shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-[var(--font-syne)] text-xl font-bold text-foreground">
                    {t.bookingModal.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t.bookingModal.subtitle}
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                aria-label={t.bookingModal.close}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Body */}
            <div className="max-h-[70vh] overflow-y-auto p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Step indicator */}
                <div className="flex items-center justify-center gap-2">
                  <div className="flex h-2 w-2 rounded-full bg-primary" />
                  <span className="text-sm text-muted-foreground">
                    {t.bookingModal.stepLabel}
                  </span>
                </div>

                {/* Calendar + Time Slots */}
                <div className="grid gap-6 md:grid-cols-2">
                  {/* Mini Calendar */}
                  <div className="rounded-2xl border border-border bg-card/50 p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="font-medium text-foreground">{t.bookingModal.monthLabel}</span>
                    </div>
                    <div className="grid grid-cols-7 gap-1">
                      {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                         <span
                           key={day}
                           className="text-center text-xs font-medium text-muted-foreground py-2"
                         >
                           {day.charAt(0)}
                         </span>
                       ))}
                      {availableDays.map(({ day, date, available }) => (
                        <button
                          key={`${day}-${date}`}
                          type="button"
                          onClick={() => available && setSelectedDay(`${day} ${date}`)}
                          className={cn(
                            "flex h-8 w-8 items-center justify-center rounded-lg text-sm font-medium transition-all",
                            available
                              ? selectedDay === `${day} ${date}`
                                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                                : "hover:bg-secondary text-foreground"
                              : "text-muted-foreground opacity-40 cursor-not-allowed"
                          )}
                          disabled={!available}
                        >
                          {date}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Time Slots */}
                  <div>
                    <label className="mb-3 block text-sm font-medium text-foreground">
                      {t.bookingModal.selectTimeLabel}
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          className={cn(
                            "rounded-lg border px-2 py-2 text-xs font-medium transition-all",
                            selectedTime === time
                              ? "border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                              : "border-border bg-card hover:border-primary/50 hover:bg-secondary"
                          )}
                        >
                          <Clock className="mx-auto mb-1 h-3 w-3" />
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Form Fields */}
                <div className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground">
                        <User className="h-4 w-4 text-muted-foreground" />
                        {t.bookingModal.fullName}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full rounded-xl border border-border bg-card/50 px-4 py-3 text-foreground placeholder-muted-foreground transition-all focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                        placeholder={t.bookingModal.placeholderName}
                      />
                    </div>
                    <div>
                      <label className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        {t.bookingModal.email}
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full rounded-xl border border-border bg-card/50 px-4 py-3 text-foreground placeholder-muted-foreground transition-all focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                        placeholder={t.bookingModal.placeholderEmail}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      {t.bookingModal.phoneOptional}
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full rounded-xl border border-border bg-card/50 px-4 py-3 text-foreground placeholder-muted-foreground transition-all focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                      placeholder={t.bookingModal.placeholderPhone}
                    />
                  </div>

                  <div>
                    <label className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground">
                      <MessageCircle className="h-4 w-4 text-muted-foreground" />
                      {t.bookingModal.messageOptional}
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={3}
                      className="w-full rounded-xl border border-border bg-card/50 px-4 py-3 text-foreground placeholder-muted-foreground transition-all focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none resize-none"
                      placeholder={t.bookingModal.placeholderMessage}
                    />
                  </div>
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={!selectedDay || !selectedTime}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    "w-full rounded-full px-8 py-4 text-base font-medium transition-all",
                    selectedDay && selectedTime
                      ? "bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/25"
                      : "cursor-not-allowed bg-secondary/50 text-muted-foreground"
                  )}
                >
                  {t.bookingModal.confirm}
                </motion.button>

                <p className="text-center text-xs text-muted-foreground">
                  {t.bookingModal.agreement}
                </p>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
