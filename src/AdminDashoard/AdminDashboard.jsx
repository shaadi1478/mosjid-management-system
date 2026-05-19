import { useEffect, useState } from "react";

import {
  Calendar,
  Bell,
  Trash2,
  Pencil,
  Plus,
  X,
} from "lucide-react";

const API_URL =
  "https://script.google.com/macros/s/AKfycbxf-Cjjl6Z5QXXrL_3DDU9-jNIdwL9p9VlgcEHm0grpeK8tcAXMmH96BkNBSExq6ivq/exec";

export default function AdminDashboard() {

  // EVENTS
  const [events, setEvents] = useState([]);

  // NOTICES
  const [notices, setNotices] =
    useState([]);

  // MODAL
  const [eventModal, setEventModal] =
    useState(false);

  const [noticeModal, setNoticeModal] =
    useState(false);

  // EDIT MODE
  const [editingEvent, setEditingEvent] =
    useState(null);

  // EVENT FORM
  const [eventForm, setEventForm] =
    useState({
      title: "",
      date: "",
      time: "",
      location: "",
    });

  // NOTICE FORM
  const [noticeForm, setNoticeForm] =
    useState({
      category: "",
      title: "",
      time: "",
    });

  // =========================
  // FETCH DATA
  // =========================

  const fetchData = async () => {

    try {

      const res = await fetch(API_URL);

      const data = await res.json();

      setEvents(data.events || []);

      setNotices(data.notices || []);

    } catch (error) {

      console.log(error);
    }
  };

  useEffect(() => {

    fetchData();

  }, []);

  // =========================
  // EVENT INPUT
  // =========================

  const handleEventChange = (e) => {

    setEventForm({
      ...eventForm,
      [e.target.name]: e.target.value,
    });
  };

  // =========================
  // NOTICE INPUT
  // =========================

  const handleNoticeChange = (e) => {

    setNoticeForm({
      ...noticeForm,
      [e.target.name]: e.target.value,
    });
  };

  // =========================
  // ADD EVENT
  // =========================

const handleAddEvent = async () => {
  const payload = {
    type: "add-event",
    data: eventForm,
  };

  try {
    await fetch(API_URL, {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(payload),
    });

    alert("Event Added Successfully");

    setEventModal(false);
    fetchData(); // optional refresh
  } catch (err) {
    console.log(err);
  }
};

  // =========================
  // UPDATE EVENT
  // =========================

  const handleUpdateEvent =
    async () => {

      try {

        await fetch(API_URL, {
          method: "POST",
          body: JSON.stringify({
            type: "update-event",
            oldTitle:
              editingEvent.title,
            data: eventForm,
          }),
        });

        fetchData();

        setEditingEvent(null);

        setEventModal(false);

      } catch (error) {

        console.log(error);
      }
    };

  // =========================
  // DELETE EVENT
  // =========================

  const handleDeleteEvent =
    async (title) => {

      const confirmDelete =
        window.confirm(
          "Delete this event?"
        );

      if (!confirmDelete) return;

      try {

        fetch(API_URL, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "text/plain",
          },
          body: JSON.stringify(payload),
        });

        fetchData();

      } catch (error) {

        console.log(error);
      }
    };

  // =========================
  // ADD NOTICE
  // =========================

  const handleAddNotice =
    async () => {

      if (
        !noticeForm.category ||
        !noticeForm.title ||
        !noticeForm.time
      ) {
        return alert("Fill all fields");
      }

      try {

        await fetch(API_URL, {
          method: "POST",
          body: JSON.stringify({
            type: "add-notice",
            data: noticeForm,
          }),
        });

        fetchData();

        setNoticeModal(false);

        setNoticeForm({
          category: "",
          title: "",
          time: "",
        });

      } catch (error) {

        console.log(error);
      }
    };

  return (
    <section className="min-h-screen bg-[#f5f7f6] p-6 pt-36">

      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <div>

            <h1 className="text-4xl font-bold text-gray-900">
              Mosque Admin Dashboard
            </h1>

            <p className="mt-2 text-gray-500">
              Manage Events & Notices
            </p>
          </div>

          <div className="flex gap-3">

            <button
              onClick={() =>
                setEventModal(true)
              }
              className="inline-flex h-12 items-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 px-5 text-sm font-medium text-white shadow-lg"
            >

              <Plus className="h-4 w-4" />

              Add Event
            </button>

            <button
              onClick={() =>
                setNoticeModal(true)
              }
              className="inline-flex h-12 items-center gap-2 rounded-2xl bg-amber-500 px-5 text-sm font-medium text-white shadow-lg"
            >

              <Plus className="h-4 w-4" />

              Add Notice
            </button>
          </div>
        </div>

        {/* EVENTS */}
        <div className="grid gap-6 lg:grid-cols-2">

          <div className="rounded-3xl bg-white p-6 shadow-sm">

            <div className="mb-6 flex items-center gap-3">

              <Calendar className="h-5 w-5 text-emerald-600" />

              <h2 className="text-2xl font-semibold text-gray-900">
                Events
              </h2>
            </div>

            <div className="space-y-4">

              {events.map(
                (event, index) => (

                  <div
                    key={index}
                    className="rounded-2xl border border-gray-200 p-5"
                  >

                    <h3 className="text-xl font-semibold text-gray-900">
                      {event.title}
                    </h3>

                    <div className="mt-2 space-y-1 text-sm text-gray-500">

                      <p>
                        {event.date}
                      </p>

                      <p>
                        {event.time}
                      </p>

                      <p>
                        {event.location}
                      </p>
                    </div>

                    <div className="mt-5 flex gap-3">

                      <button
                        onClick={() => {

                          setEditingEvent(
                            event
                          );

                          setEventForm(
                            event
                          );

                          setEventModal(
                            true
                          );
                        }}
                        className="inline-flex h-10 items-center gap-2 rounded-xl bg-blue-500 px-4 text-sm font-medium text-white"
                      >

                        <Pencil className="h-4 w-4" />

                        Edit
                      </button>

                      <button
                        onClick={() =>
                          handleDeleteEvent(
                            event.title
                          )
                        }
                        className="inline-flex h-10 items-center gap-2 rounded-xl bg-red-500 px-4 text-sm font-medium text-white"
                      >

                        <Trash2 className="h-4 w-4" />

                        Delete
                      </button>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          {/* NOTICES */}
          <div className="rounded-3xl bg-white p-6 shadow-sm">

            <div className="mb-6 flex items-center gap-3">

              <Bell className="h-5 w-5 text-amber-500" />

              <h2 className="text-2xl font-semibold text-gray-900">
                Notices
              </h2>
            </div>

            <div className="space-y-4">

              {notices.map(
                (notice, index) => (

                  <div
                    key={index}
                    className="rounded-2xl border border-gray-200 p-5"
                  >

                    <div className="text-xs uppercase tracking-wider text-amber-500">
                      {
                        notice.category
                      }
                    </div>

                    <h3 className="mt-2 text-lg font-semibold text-gray-900">
                      {notice.title}
                    </h3>

                    <p className="mt-2 text-sm text-gray-500">
                      {notice.time}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* EVENT MODAL */}
      {eventModal && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">

          <div className="w-full max-w-lg rounded-3xl bg-white p-8">

            <div className="mb-6 flex items-center justify-between">

              <h3 className="text-2xl font-semibold text-gray-900">

                {editingEvent
                  ? "Update Event"
                  : "Add Event"}
              </h3>

              <button
                onClick={() => {

                  setEventModal(false);

                  setEditingEvent(
                    null
                  );
                }}
              >

                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-4">

              <input
                type="text"
                name="title"
                placeholder="Event Title"
                value={eventForm.title}
                onChange={
                  handleEventChange
                }
                className="h-12 w-full rounded-2xl border border-gray-200 px-4"
              />

              <input
                type="text"
                name="date"
                placeholder="Date"
                value={eventForm.date}
                onChange={
                  handleEventChange
                }
                className="h-12 w-full rounded-2xl border border-gray-200 px-4"
              />

              <input
                type="text"
                name="time"
                placeholder="Time"
                value={eventForm.time}
                onChange={
                  handleEventChange
                }
                className="h-12 w-full rounded-2xl border border-gray-200 px-4"
              />

              <input
                type="text"
                name="location"
                placeholder="Location"
                value={
                  eventForm.location
                }
                onChange={
                  handleEventChange
                }
                className="h-12 w-full rounded-2xl border border-gray-200 px-4"
              />

              <button
                onClick={
                  editingEvent
                    ? handleUpdateEvent
                    : handleAddEvent
                }
                className="h-12 w-full rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 text-sm font-medium text-white"
              >

                {editingEvent
                  ? "Update Event"
                  : "Add Event"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* NOTICE MODAL */}
      {noticeModal && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">

          <div className="w-full max-w-lg rounded-3xl bg-white p-8">

            <div className="mb-6 flex items-center justify-between">

              <h3 className="text-2xl font-semibold text-gray-900">
                Add Notice
              </h3>

              <button
                onClick={() =>
                  setNoticeModal(false)
                }
              >

                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-4">

              <input
                type="text"
                name="category"
                placeholder="Category"
                value={
                  noticeForm.category
                }
                onChange={
                  handleNoticeChange
                }
                className="h-12 w-full rounded-2xl border border-gray-200 px-4"
              />

              <input
                type="text"
                name="title"
                placeholder="Notice Title"
                value={
                  noticeForm.title
                }
                onChange={
                  handleNoticeChange
                }
                className="h-12 w-full rounded-2xl border border-gray-200 px-4"
              />

              <input
                type="text"
                name="time"
                placeholder="Time"
                value={noticeForm.time}
                onChange={
                  handleNoticeChange
                }
                className="h-12 w-full rounded-2xl border border-gray-200 px-4"
              />

              <button
                onClick={
                  handleAddNotice
                }
                className="h-12 w-full rounded-2xl bg-amber-500 text-sm font-medium text-white"
              >
                Add Notice
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}