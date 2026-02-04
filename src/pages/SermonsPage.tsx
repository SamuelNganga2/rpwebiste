import React, { useState, useRef, useEffect } from 'react'
import sermonAudio from '../assets/From Stained to Sent - 2.mp3'
import audio from '../assets/From Stained to Sent 1.mp3'

const SermonsPage: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState('all')
  const [currentlyPlaying, setCurrentlyPlaying] = useState<number | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)

  const topics = [
    { id: 'all', name: 'All Sermons' },
    { id: 'faith', name: 'Faith & Trust' },
    { id: 'prayer', name: 'Prayer & Worship' },
    { id: 'discipleship', name: 'Discipleship' },
    { id: 'salvation', name: 'Salvation' },
    { id: 'christian-living', name: 'Christian Living' }
  ]

  const sermons = [
    {
      id: 1,
      title: "Walking in Faith",
      description: "Discover how to live a life of unwavering faith in God's promises, even in the midst of challenges and uncertainties.",
      date: "December 15, 2024",
      topic: "faith",
      hasAudio: true,
      hasPDF: false,
      hasVideo: false,
      duration: "47 min",
      audioUrl: sermonAudio

    },
    {
      id: 2,
      title: "The Power of Prayer",
      description: "Understanding the transformative power of prayer in our daily lives and how it connects us with God's heart.",
      date: "December 8, 2024",
      topic: "prayer",
      hasAudio: true,
      hasPDF: false,
      hasVideo: false,
      duration: "38 min",
      audioUrl: audio
    },
    {
      id: 3,
      title: "God's Grace and Mercy",
      description: "Exploring the depths of God's unending grace and mercy for His children and how it changes everything.",
      date: "December 1, 2024",
      topic: "salvation",
      hasAudio: true,
      hasPDF: false,
      hasVideo: false,
      duration: "52 min",
      audioUrl: sermonAudio
    },
    {
      id: 4,
      title: "Making Disciples",
      description: "The Great Commission calls us to make disciples. Learn practical ways to share your faith and mentor others.",
      date: "November 24, 2024",
      topic: "discipleship",
      hasAudio: true,
      hasPDF: false,
      hasVideo: false,
      duration: "41 min",
      audioUrl: sermonAudio
    },
    {
      id: 5,
      title: "Living as Salt and Light",
      description: "How Christians are called to be salt and light in the world, making a positive impact in our communities.",
      date: "November 17, 2024",
      topic: "christian-living",
      hasAudio: true,
      hasPDF: false,
      hasVideo: false,
      duration: "36 min",
      audioUrl: sermonAudio
    },
    {
      id: 6,
      title: "Trusting God's Timing",
      description: "Learning to trust God's perfect timing in our lives, even when His plans don't align with our expectations.",
      date: "November 10, 2024",
      topic: "faith",
      hasAudio: true,
      hasPDF: false,
      hasVideo: false,
      duration: "43 min",
      audioUrl: sermonAudio
    }
  ]

  const filteredSermons = selectedTopic === 'all' 
    ? sermons 
    : sermons.filter(sermon => sermon.topic === selectedTopic)

  const handlePlayPause = (sermonId: number) => {
    if (currentlyPlaying === sermonId && isPlaying) {
      audioRef.current?.pause()
      setIsPlaying(false)
    } else {
      if (currentlyPlaying !== sermonId) {
        const sermon = sermons.find(s => s.id === sermonId)
        if (sermon && audioRef.current) {
          audioRef.current.src = sermon.audioUrl
          audioRef.current.load()
        }
      }
      audioRef.current?.play()
      setCurrentlyPlaying(sermonId)
      setIsPlaying(true)
    }
  }

  const handleDownload = (sermon: any) => {
    const link = document.createElement('a')
    link.href = sermon.audioUrl
    link.download = `${sermon.title}.mp3`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateTime = () => setCurrentTime(audio.currentTime)
    const updateDuration = () => setDuration(audio.duration)
    const handleEnded = () => {
      setIsPlaying(false)
      setCurrentlyPlaying(null)
    }

    audio.addEventListener('timeupdate', updateTime)
    audio.addEventListener('loadedmetadata', updateDuration)
    audio.addEventListener('ended', handleEnded)

    return () => {
      audio.removeEventListener('timeupdate', updateTime)
      audio.removeEventListener('loadedmetadata', updateDuration)
      audio.removeEventListener('ended', handleEnded)
    }
  }, [])

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-800 dark:text-white mb-6 font-serif">
            Sermons
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary-500 to-secondary-600 mx-auto mb-8"></div>
          <p className="text-xl text-accent-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Be blessed and inspired by these powerful messages from God's Word. 
            Listen to the audios online or download them to your device for offline access.
          </p>
        </div>

        {/* Topic Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {topics.map((topic) => (
              <button
                key={topic.id}
                onClick={() => setSelectedTopic(topic.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedTopic === topic.id
                    ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-accent-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-700 hover:text-primary-600 dark:hover:text-white shadow-md'
                }`}
              >
                {topic.name}
              </button>
            ))}
          </div>
        </div>

        {/* Sermons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSermons.map((sermon) => (
            <div key={sermon.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div className="h-48 bg-gradient-to-br from-primary-500 to-spiritual-500 flex items-center justify-center relative">
                <button 
                  onClick={() => handlePlayPause(sermon.id)}
                  className="text-white text-6xl group-hover:scale-110 transition-transform duration-300 hover:opacity-80"
                >
                  <i className={`bi ${
                    currentlyPlaying === sermon.id && isPlaying
                      ? 'bi-pause-circle-fill'
                      : 'bi-play-circle-fill'
                  }`}></i>
                </button>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md rounded-full px-3 py-1">
                  <span className="text-white text-sm font-semibold">{sermon.duration}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-secondary-100 dark:bg-secondary-900 text-secondary-700 dark:text-secondary-300 px-3 py-1 rounded-full text-sm font-semibold">
                    {topics.find(t => t.id === sermon.topic)?.name}
                  </span>
                  <span className="text-sm text-accent-500 dark:text-gray-400">{sermon.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-primary-800 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-gray-300 transition-colors duration-300">
                  {sermon.title}
                </h3>
                <p className="text-accent-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {sermon.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex space-x-3">
                    {sermon.hasAudio && (
                      <button 
                        onClick={() => handlePlayPause(sermon.id)}
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 group ${
                          currentlyPlaying === sermon.id && isPlaying
                            ? 'bg-green-500 hover:bg-green-600'
                            : 'bg-green-100 dark:bg-green-900 hover:bg-green-200 dark:hover:bg-green-800'
                        }`}
                      >
                        <i className={`bi ${
                          currentlyPlaying === sermon.id && isPlaying
                            ? 'bi-pause-fill'
                            : 'bi-headphones'
                        } ${
                          currentlyPlaying === sermon.id && isPlaying
                            ? 'text-white'
                            : 'text-green-600 dark:text-green-400'
                        } group-hover:scale-110 transition-transform duration-300`}></i>
                      </button>
                    )}
                    {sermon.hasPDF && (
                      <button className="w-10 h-10 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center hover:bg-red-200 dark:hover:bg-red-800 transition-colors duration-300 group">
                        <i className="bi bi-file-pdf text-red-600 dark:text-red-400 group-hover:scale-110 transition-transform duration-300"></i>
                      </button>
                    )}
                    {sermon.hasVideo && (
                      <button className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors duration-300 group">
                        <i className="bi bi-play-btn text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300"></i>
                      </button>
                    )}
                  </div>
                  
                  <button 
                    onClick={() => handleDownload(sermon)}
                    className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-2 rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <i className="bi bi-download mr-2"></i>
                    Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredSermons.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-accent-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="bi bi-search text-accent-400 dark:text-gray-400 text-3xl"></i>
            </div>
            <h3 className="text-2xl font-semibold text-primary-800 dark:text-white mb-4">No Sermons Found</h3>
            <p className="text-accent-600 dark:text-gray-300">
              No sermons found for the selected topic. Try selecting a different category.
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-primary-50 to-spiritual-50 dark:from-gray-700 dark:to-gray-600 rounded-3xl p-8 md:p-12 transition-colors duration-300">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 dark:text-white mb-6 font-serif">
              Want to Stay Updated?
            </h2>
            <p className="text-xl text-accent-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              visit our telegram channel to get access to our collection of sermons
            </p>
            <a 
              href="https://t.me/+JlXjIgrFs71jNzJk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-secondary-500 to-secondary-600 text-white px-8 py-4 rounded-full font-semibold hover:from-secondary-600 hover:to-secondary-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <i className="bi bi-telegram mr-2"></i>
              Visit our channel
            </a>
          </div>
        </div>

        {/* Audio Player */}
        {currentlyPlaying && (
          <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-600 shadow-2xl p-4 z-50 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => handlePlayPause(currentlyPlaying)}
                  className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <i className={`bi ${isPlaying ? 'bi-pause-fill' : 'bi-play-fill'} text-white text-xl transition-all duration-300`}></i>
                </button>
                
                <div className="flex-1">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm font-semibold text-primary-800 dark:text-white">
                      {sermons.find(s => s.id === currentlyPlaying)?.title}
                    </span>
                    <span className="text-xs text-accent-500 dark:text-gray-400">
                      {formatTime(currentTime)} / {formatTime(duration || 0)}
                    </span>
                  </div>
                  <div className="mt-2">
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 cursor-pointer" onClick={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect()
                      const x = e.clientX - rect.left
                      const percentage = x / rect.width
                      if (audioRef.current && duration) {
                        audioRef.current.currentTime = percentage * duration
                      }
                    }}>
                      <div 
                        className="bg-green-500 h-2 rounded-full transition-all duration-300 relative"
                        style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
                      >
                        <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-md"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <button
                  onClick={() => {
                    audioRef.current?.pause()
                    setIsPlaying(false)
                    setCurrentlyPlaying(null)
                  }}
                  className="w-8 h-8 flex items-center justify-center text-accent-500 dark:text-gray-400 hover:text-accent-700 dark:hover:text-gray-200 transition-colors duration-300"
                >
                  <i className="bi bi-x-lg"></i>
                </button>
              </div>
            </div>
          </div>
        )}

        <audio ref={audioRef} className="hidden" />
      </div>
    </div>
  )
}

export default SermonsPage
