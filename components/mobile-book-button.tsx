"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"

export function MobileBookButton({ onBookClick }: { onBookClick: () => void }) {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 z-30 p-4 bg-background/80 backdrop-blur-lg border-t border-border md:hidden"
    >
      <div className="flex gap-3">
        <Button
          onClick={onBookClick}
          className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground py-6 rounded-xl text-lg font-semibold"
        >
          Book Service Now
        </Button>
        <Button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          variant="outline"
          className="px-4 py-6 rounded-xl"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      </div>
    </motion.div>
  )
}
